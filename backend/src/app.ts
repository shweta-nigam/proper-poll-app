import express, { Application } from "express";

const createServer = (): Application => {
  const app = express();

  // Middleware
  app.use(express.json());

  // Health check route
  app.get("/", (_req, res) => {
    res.send("Server is running");
  });

  return app;
};

export default createServer;
