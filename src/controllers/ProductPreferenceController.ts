import { Request, Response } from "express";
import CreateProductPreferenceService from "../services/preference/CreateProductPreferenceService";
import { ProductRequest } from "../dto/ProductRequest";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const productRequest: ProductRequest = req.body;
  const data = await CreateProductPreferenceService(productRequest);
  return res.status(200).json({ message: 'success to create preferences', data: data });
};
