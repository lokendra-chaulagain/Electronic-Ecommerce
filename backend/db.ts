import { DataSource } from "typeorm";
// import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lokendra@55",
  database: "electronic-ecommerce",
  synchronize: true,
  logging: true,
  // entities: [User],
  entities: ["entites/*"],
});
