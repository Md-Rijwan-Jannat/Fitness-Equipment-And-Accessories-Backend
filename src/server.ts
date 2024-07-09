import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import dotenv from "dotenv";

dotenv.config();

let server: Server;

async function main() {
  try {
    console.log(`Connecting to MongoDB at ${config.database_url}`); // Debug log
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

main();

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection is detected, shutting down ...😈`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception is detected, shutting down ...😈`, err);
  process.exit(1);
});
