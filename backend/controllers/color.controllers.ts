import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Color } from "../entities/Color";

export const getColors = async (req: Request, res: Response) => {
  try {
    const colors = await AppDataSource.getRepository(Color).find();
    return res.status(200).json(colors);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getColor = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const color = await AppDataSource.getRepository(Color).findOneBy(id);
    return res.status(200).json(color);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createColor = async (req: Request, res: Response) => {
  try {
    const color = AppDataSource.getRepository(Color).create(req.body);
    const results = await AppDataSource.getRepository(Color).save(color);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateColor = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const color: any = await AppDataSource.getRepository(Color).findOneBy(id);
    AppDataSource.getRepository(Color).merge(color, req.body);
    const result = await AppDataSource.getRepository(Color).save(color);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteColor = async (req: Request, res: Response) => {
  try {
    const color = await AppDataSource.getRepository(Color).delete(req.params.id);
    return res.status(200).json(color);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
