import { Request, Response } from "express";
import { User } from "../entities/User";

interface UserBody {
  firstName: string;
  lastName: string;
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createUser = async (req: Request<unknown, unknown, UserBody>, res: Response) => {
  const { firstName, lastName } = req.body;
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  await user.save();
  return res.status(200).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "Not user found" });

    const updatedUser = await User.update({ id: parseInt(id) }, req.body);

    return res.status(201).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0) return res.status(404).json({ message: "User not found" });

    return res.status(204).json("User deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
