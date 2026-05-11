import dotenv from "dotenv";

dotenv.config();

import createServer from "./server.js";
import connectDB from "../common/config/db.js";

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    const app = createServer();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);

    process.exit(1);
  }
};

startServer();