import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  const { icon, name } = req.body;
  console.log(icon, name);
  //await Category.create({});
}
