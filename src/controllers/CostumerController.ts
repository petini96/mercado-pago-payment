import { Request, Response } from "express";
import { CostumerInput } from "../dto/costumer/CostumerInput";
import { CreateCostumerService } from "../services/preference/CreateCostumerService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const costumerInput: CostumerInput = req.body;
  try {
    const data = await CreateCostumerService(costumerInput);
    return res.status(200).json({ message: 'success to create plan', data: data });
  } catch (error) {
    console.error("Failed to create customer:", error);
    return res.status(400).json({ message: 'failed to create plan', error: error.message });
  }
}; 
