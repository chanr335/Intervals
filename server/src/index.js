import app from "./app.js";
import router from "./routes/navRoutes.js";
import admin from "firebase-admin";
import credentials from "../firebaseAccountKey.json" assert { type: "json" };

const port = process.env.PORT || 3000;

// const admin = require("firebase-admin");
// const credentials = require("../firebaseAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`[server]: Server is running on PORT ${port}.`);
});
