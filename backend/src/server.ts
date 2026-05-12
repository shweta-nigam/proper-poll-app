
import dotenv from "dotenv";
dotenv.config();

import http from "node:http"
import {Server} from "socket.io"

import createServer from "./app.js";
import connectDB from "./common/config/db.js";

import initializeSocket from "./socket.js";

export let io: Server;

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    const app = createServer();

    const httpServer = http.createServer(app)
    
    io= new Server(httpServer, {
      cors:{
        origin: "*"
      }
    })

    initializeSocket(io)

    
    const PORT = process.env.PORT || 5000;


    httpServer.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
  }
};

startServer();