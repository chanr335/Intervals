import app from "../app.js";
import { Router } from "express";
import admin from "firebase-admin";

const router = Router();

router.get("/", (req, res) => {
  return res.json("Welcome");
});

router.get("/login", (req, res) => {
  return res.json("Login");
});

app.post("/api/signup", async (req, res) => {
  const userResponse = await admin.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
  });
  res.json(userResponse);
});

export default router;
