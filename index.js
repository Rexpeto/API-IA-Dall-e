import express from "express";
import "dotenv/config";
import cors from "cors";
import dalleRoute from "./routes/dalle.route.js";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/dalle", dalleRoute);

app.listen(PORT, () => console.log(`Running through the port ${PORT}`));
