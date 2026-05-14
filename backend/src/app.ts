import express, { Application } from "express";
import authRoutes from "./modules/auth/auth.routes.js"
import pollRoutes from "./modules/poll/poll.routes.js"
import responseRoutes from "./modules/response/response.routes.js"
import cors from "cors";

const createServer = (): Application => {
  const app = express();




  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );

  // Middleware
  app.use(express.json());
  // Health check route
  app.get("/", (_req, res) => {
    res.send("Server is running");
  });

  app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server running",
  });
});


  app.use("/api/v1/auth", authRoutes)
  app.use("/api/v1/polls", pollRoutes)
  app.use("/api/v1/responses", responseRoutes)


  return app;
};

export default createServer;
