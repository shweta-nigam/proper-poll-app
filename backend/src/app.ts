import express, { Application } from "express";
import authRoutes from "./modules/auth/auth.routes.js"
import pollRoutes from "./modules/poll/poll.routes.js"

const createServer = (): Application => {
  const app = express();

  // Middleware
  app.use(express.json());

  // Health check route
  app.get("/", (_req, res) => {
    res.send("Server is running");
  });


  // app.use("/api/auth", authRoutes )
  app.use("/api/v1/polls", pollRoutes )


  return app;
};

export default createServer;
