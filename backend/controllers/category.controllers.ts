import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Category } from "../entities/Category";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await AppDataSource.getRepository(Category).find();
    return res.status(200).json(categories);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const category = await AppDataSource.getRepository(Category).findOneBy(id);
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = AppDataSource.getRepository(Category).create(req.body);
    const results = await AppDataSource.getRepository(Category).save(category);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const category: any = await AppDataSource.getRepository(Category).findOneBy(id);
    AppDataSource.getRepository(Category).merge(category, req.body);
    const result = await AppDataSource.getRepository(Category).save(category);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await AppDataSource.getRepository(Category).delete(req.params.id);
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
