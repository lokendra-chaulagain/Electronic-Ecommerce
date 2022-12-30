import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lokendra@55",
  database: "electronic-ecommerce",
  synchronize: true,
  logging: true,
  entities: ["./entities/*.ts"],
});
