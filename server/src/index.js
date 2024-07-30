import app from "./app.js";
import router from "./routes/navRoutes.js";

const port = 3000;

app.use("/api", router)


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});

