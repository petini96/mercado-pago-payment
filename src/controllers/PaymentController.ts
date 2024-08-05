import { Request, Response } from "express";
import { CreatePaymentService } from "../services/preference/CreatePaymentService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body)
  
  try {
    const data = await CreatePaymentService(req.body);
    return res.status(200).json({ message: 'success to create payment', data: data });
  } catch (error) {
    console.error("Failed to create paymenent:", error);
    return res.status(400).json({ message: 'failed to create payment', error: error.message });
  }
}; 
