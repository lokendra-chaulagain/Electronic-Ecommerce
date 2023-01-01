import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Contact } from "../entities/Contact";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await AppDataSource.getRepository(Contact).find();
    return res.status(200).json(contacts);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContact = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const contact = await AppDataSource.getRepository(Contact).findOneBy(id);
    return res.status(200).json(contact);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = AppDataSource.getRepository(Contact).create(req.body);
    const results = await AppDataSource.getRepository(Contact).save(contact);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const contact: any = await AppDataSource.getRepository(Contact).findOneBy(id);
    AppDataSource.getRepository(Contact).merge(contact, req.body);
    const result = await AppDataSource.getRepository(Contact).save(contact);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const contact = await AppDataSource.getRepository(Contact).delete(req.params.id);
    return res.status(200).json(contact);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
