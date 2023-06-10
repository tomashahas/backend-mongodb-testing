import express from "express";
import { createText, getAllText } from "../controllers/apiControll.js";

const router = express.Router();

router.get('/', getAllText);
router.post('/', createText);

export default router;