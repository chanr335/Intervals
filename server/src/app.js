import express from "express";
import admin from "firebase-admin";
import serviceAccount from "../firebaseAccountKey.json" assert { type: "json" };

const app = express();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

app.get("/", (req, res) => {
  return res.json("Intervals");
});

export default app;
