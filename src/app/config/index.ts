import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  database_url: process.env.database_url,
};
