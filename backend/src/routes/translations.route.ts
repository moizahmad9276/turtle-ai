import { Router } from "express";
import { getTranslations, getSupportedLanguages } from "../controllers/translations.controller";

const router = Router();

router.get("/", getTranslations);
router.get("/languages", getSupportedLanguages);

export default router;