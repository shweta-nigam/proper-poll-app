import dotenv from "dotenv";
dotenv.config();

import createServer from "./app.js";
import connectDB from "./common/config/db.js";

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    const app = createServer();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
  }
};

startServer();