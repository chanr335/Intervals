import app from "./app.js";
import router from "./routes/navRoutes.js";

const port = process.env.PORT || 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`[server]: Server is running on PORT ${port}.`);
});
