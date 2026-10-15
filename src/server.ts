import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log("Running on http://localhost:3000"));