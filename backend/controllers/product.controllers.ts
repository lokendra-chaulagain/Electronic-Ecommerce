import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { AppDataSource } from "../db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await AppDataSource.getRepository(Product).find();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const product = await AppDataSource.getRepository(Product).findOneBy(id);
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = AppDataSource.getRepository(Product).create(req.body);
    const results = await AppDataSource.getRepository(Product).save(product);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const product: any = await AppDataSource.getRepository(Product).findOneBy(id);
    AppDataSource.getRepository(Product).merge(product, req.body);
    const result = await AppDataSource.getRepository(Product).save(product);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await AppDataSource.getRepository(Product).delete(req.params.id);
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
