import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo";
import { handleContactSubmission } from "./routes/contact";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Set MIME types for static assets
  app.set("view engine", "html");

  // Serve static files from dist/spa with correct MIME types
  app.use(express.static(path.join(__dirname, "../dist/spa"), {
    setHeaders: (res, filepath) => {
      if (filepath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      } else if (filepath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      } else if (filepath.endsWith(".json")) {
        res.setHeader("Content-Type", "application/json");
      } else if (filepath.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      } else if (filepath.endsWith(".woff") || filepath.endsWith(".woff2")) {
        res.setHeader("Content-Type", "font/woff2");
      }
    },
  }));

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactSubmission);

  // SPA fallback - serve index.html for all non-API routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../dist/spa/index.html"));
  });

  return app;
}
