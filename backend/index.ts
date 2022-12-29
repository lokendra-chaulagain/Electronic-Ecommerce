import app from "./app";
import "reflect-metadata";
import { PORT } from "./config";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");
    app.listen(PORT);
    console.log("Server running on port", PORT);
  } catch (error) {
    console.error(error);
  }
}

main();
