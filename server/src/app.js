import express from "express";
import admin from "firebase-admin";
import credentials from "../firebaseAccountKey.json" assert { type: "json" };
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Intervals");
});

app.post("/signup", async (req, res) => {
  const userResponse = await admin.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
  });
  res.json(userResponse);
});

export default app;
