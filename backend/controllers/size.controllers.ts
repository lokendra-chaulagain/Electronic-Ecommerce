import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Size } from "../entities/Size";

export const getSizes = async (req: Request, res: Response) => {
  try {
    const sizes = await AppDataSource.getRepository(Size).find();
    return res.status(200).json(sizes);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSize = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const size = await AppDataSource.getRepository(Size).findOneBy(id);
    return res.status(200).json(size);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSize = async (req: Request, res: Response) => {
  try {
    const size = AppDataSource.getRepository(Size).create(req.body);
    const results = await AppDataSource.getRepository(Size).save(size);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSize = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const size: any = await AppDataSource.getRepository(Size).findOneBy(id);
    AppDataSource.getRepository(Size).merge(size, req.body);
    const result = await AppDataSource.getRepository(Size).save(size);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSize = async (req: Request, res: Response) => {
  try {
    const size = await AppDataSource.getRepository(Size).delete(req.params.id);
    return res.status(200).json(size);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
