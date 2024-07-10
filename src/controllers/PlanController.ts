import { Request, Response } from "express";

import CreateProductPreferenceService from "../services/preference/CreateProductPreferenceService";
import { PlanRequest } from "../dto/PlanRequest";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const planRequest: PlanRequest = req.body; 
  return res.status(200).json({ message: 'success to create plan', data: planRequest });
};
