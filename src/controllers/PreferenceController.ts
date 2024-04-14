import { Request, Response } from "express";

import CreatePreferenceService from "../services/preference/CreatePreferenceService"; 
import { Preference } from "mercadopago";
 
export const store = async (req: Request, res: Response): Promise<Response> => {
  const preference: Preference = req.body;
  const queue = await CreatePreferenceService(preference);
  return res.status(200).json(queue);
};
 