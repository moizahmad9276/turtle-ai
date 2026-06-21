// ─────────────────────────────────────────────────────────────────────────────
// seed-translations.ts
// Run once: npx ts-node src/scripts/seed-translations.ts
// Translates all English strings into 5 other languages using Google Translate
// (free, no API key needed via @vitalets/google-translate-api)
// then seeds them into Supabase via Prisma
// ─────────────────────────────────────────────────────────────────────────────

import { PrismaClient } from "@prisma/client";
import translate from "translate";
import { englishStrings } from "../shared/englishStrings";
import { createHash } from "crypto";

translate.engine = "google";
translate.key = "";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DIRECT_URL, // use direct connection for seeding
    },
  },
});

const LANGUAGES = ["de", "fr", "es", "uk", "ar", "ur"];

// ─── HASH HELPER ─────────────────────────────────────────────────
function hash(text: string): string {
  return createHash("md5").update(text).digest("hex");
}

// ─── TRANSLATE ────────────────────────────────────────────────────────────────
async function translateText(text: string, targetLang: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise(r => setTimeout(r, 1000));
      const result = await translate(text, { from: "en", to: targetLang });
      return result;
    } catch (err: any) {
      if (i < retries - 1) {
        const wait = 3000 * (i + 1);
        console.warn(`\n  Retrying [${targetLang}] in ${wait / 1000}s...`);
        await new Promise(r => setTimeout(r, wait));
      } else {
        console.error(`\n  Failed: "${text.substring(0, 30)}" → [${targetLang}]`);
        return text;
      }
    }
  }
  return text;
}


// ─── SEED ────────────────────────────────────────────────────────────────────
async function seed() {
  console.log("🐢 TurtleAI — Starting translation seed...\n");

  const keys = Object.keys(englishStrings);
  let updated = 0;
  let skipped = 0;

  // 1. Seed English — always upsert
  console.log("Seeding English...");
  for (const key of keys) {
    await prisma.translation.upsert({
      where: { key_language: { key, language: "en" } },
      update: { value: englishStrings[key] },
      create: { key, language: "en", value: englishStrings[key] },
    });
  }
  console.log(`✅ English seeded (${keys.length} keys)`);

  // 2. Other languages — only translate if new or English changed
  const forceRetranslate = process.env.FORCE_RETRANSLATE === "true";

  for (const lang of LANGUAGES) {
    console.log(`\n\nProcessing [${lang.toUpperCase()}]...`);
    await new Promise(r => setTimeout(r, 2000));

    for (const key of keys) {
      const englishHash = hash(englishStrings[key]);

      const existing = await prisma.translation.findUnique({
        where: { key_language: { key, language: lang } },
      });

      // Skip if translation exists AND English source hasn't changed
      if (existing && existing.sourceHash === englishHash && !forceRetranslate) {
        skipped++;
        process.stdout.write(`\r  [SKIP] ${key}                    `);
        continue;
      }

      const translated = await translateText(englishStrings[key], lang);

      await prisma.translation.upsert({
        where: { key_language: { key, language: lang } },
        update: { value: translated, sourceHash: englishHash },
        create: { key, language: lang, value: translated, sourceHash: englishHash },
      });

      updated++;
      process.stdout.write(`\r  [NEW] ${key}: "${translated.substring(0, 40)}"`);
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\n\n✅ Done! Updated: ${updated}, Skipped: ${skipped}`);
}


seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
