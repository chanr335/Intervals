import app from "../app.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    return res.json("Welcome");
});