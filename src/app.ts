import "./bootstrap";
import "./database";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);
app.use(routes);

export default app;