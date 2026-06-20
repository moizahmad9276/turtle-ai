import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SUPPORTED_LANGUAGES = ["en", "de", "fr", "es", "uk", "ar", "ur"];

// GET /api/translations?lang=en
export async function getTranslations(req: Request, res: Response) {
  const lang = (req.query.lang as string)?.toLowerCase() ?? "en";

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return res.status(400).json({ error: `Unsupported language: ${lang}. Supported: ${SUPPORTED_LANGUAGES.join(", ")}` });
  }

  try {
    const rows = await prisma.translation.findMany({
      where: { language: lang },
      select: { key: true, value: true },
    });

    // Convert array to key-value object
    const translations = rows.reduce((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {} as Record<string, string>);

    res.setHeader("Cache-Control", "public, max-age=3600"); // cache 1 hour
    return res.json({ language: lang, translations });
  } catch (err) {
    console.error("Error fetching translations:", err);
    return res.status(500).json({ error: "Failed to fetch translations" });
  }
}

// GET /api/translations/languages
export async function getSupportedLanguages(_req: Request, res: Response) {
  return res.json({
    languages: [
      { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
      { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
      { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
      { code: "es", name: "Español", flag: "https://flagcdn.com/w40/es.png" },
      { code: "uk", name: "Українська", flag: "https://flagcdn.com/w40/ua.png" }, // Note: ua for Ukraine
      { code: "ar", name: "العربية", flag: "https://flagcdn.com/w40/sa.png" }, 
      { code: "ur", name: "اردو", flag: "https://flagcdn.com/w40/pk.png" },   // Note: pk for Pakistan
    ]
  });
}