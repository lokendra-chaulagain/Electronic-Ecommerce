import app from "./app";
import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { PORT } from "./config";
import { AppDataSource } from "./db";

async function main() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Database connected successfully");
      app.listen(PORT);
      console.log("Server running on port", PORT);
    })
    .catch((error) => console.log("Error while connecting to database!", error));
}

main();
