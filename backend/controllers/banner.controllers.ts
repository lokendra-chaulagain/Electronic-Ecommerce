import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Banner } from "../entities/Banner";

export const getBanners = async (req: Request, res: Response) => {
  try {
    const banners = await AppDataSource.getRepository(Banner).find();
    return res.status(200).json(banners);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBanner = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const banner = await AppDataSource.getRepository(Banner).findOneBy(id);
    return res.status(200).json(banner);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBanner = async (req: Request, res: Response) => {
  try {
    const banner = AppDataSource.getRepository(Banner).create(req.body);
    const results = await AppDataSource.getRepository(Banner).save(banner);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const banner: any = await AppDataSource.getRepository(Banner).findOneBy(id);
    AppDataSource.getRepository(Banner).merge(banner, req.body);
    const result = await AppDataSource.getRepository(Banner).save(banner);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const banner = await AppDataSource.getRepository(Banner).delete(req.params.id);
    return res.status(200).json(banner);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
