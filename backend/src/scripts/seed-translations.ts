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

// ─── TRANSLATE ────────────────────────────────────────────────────────────────
async function translateText(text: string, targetLang: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise(r => setTimeout(r, 1000)); // 1s before each request
      const result = await translate(text, { from: "en", to: targetLang });
      return result;
    } catch (err: any) {
      if (i < retries - 1) {
        const wait = 3000 * (i + 1);
        console.warn(`\n  Retrying [${targetLang}] in ${wait/1000}s...`);
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
  const total = keys.length * (LANGUAGES.length + 1);
  let done = 0;

  // 1. Seed English first
  for (const key of keys) {
    await prisma.translation.upsert({
      where: { key_language: { key, language: "en" } },
      update: { value: englishStrings[key] },
      create: { key, language: "en", value: englishStrings[key] },
    });
    done++;
    process.stdout.write(`\rProgress: ${done}/${total} (${Math.round((done/total)*100)}%)`);
  }

  // 2. Translate into each other language
  for (const lang of LANGUAGES) {
  console.log(`\n\nTranslating to [${lang.toUpperCase()}]...`);
  await new Promise(r => setTimeout(r, 3000));
  
  for (const key of keys) {
    // ← ADD THIS: skip if already exists
    const existing = await prisma.translation.findUnique({
      where: { key_language: { key, language: lang } },
    });
    if (existing) {
      done++;
      process.stdout.write(`\r  [SKIP] ${key}`);
      continue;
    }

    const translated = await translateText(englishStrings[key], lang);
    await prisma.translation.upsert({
      where: { key_language: { key, language: lang } },
      update: { value: translated },
      create: { key, language: lang, value: translated },
    });
    done++;
    process.stdout.write(`\r  ${key}: "${translated.substring(0, 40)}..."`);
    await new Promise(r => setTimeout(r, 500));
  }
}

  console.log("\n\n✅ All translations seeded successfully!");
  console.log(`📊 Total records: ${total}`);
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());