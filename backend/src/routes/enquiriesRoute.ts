import express from "express";
import { sendInquiry } from "../controllers/enquiriesController";

const router = express.Router();

router.post("/", sendInquiry);

export default router;
