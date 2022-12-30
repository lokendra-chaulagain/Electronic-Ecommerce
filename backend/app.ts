import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import productRoutes from "./routes/product.routes";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.get("/api", (req: Request, res: Response) => {
  res.status(200).json("Getting Response From Server");
});
app.use("/api/product", productRoutes);

export default app;
