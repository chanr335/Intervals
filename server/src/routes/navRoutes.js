import { Router } from "express";
import admin from "firebase-admin";
import axios from "axios";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const router = Router();
router.use(express.json());

router.get("/", (req, res) => {
  return res.json("Welcome");
});

router.post("/login/github", async (req, res) => {
  const { code } = req.body; //oauth code

  try {
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID, // Correct usage
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) {
      return res
        .status(400)
        .json({ error: "Failed to get access token from GitHub" });
    }

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const githubUserId = userResponse.data.id;

    const customToken = await admin
      .auth()
      .createCustomToken(githubUserId.toString());

    res.json({ customToken });
  } catch (error) {
    console.error("Error during GitHub authentication:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
