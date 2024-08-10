import { Request, Response } from "express";
import { CustomerInput } from "../dto/customer/CustomerInput";
import { CreateCustomerService } from "../services/preference/CreateCostumerService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const customerInput: CustomerInput = req.body;

  try {
    const data = await CreateCustomerService(customerInput);
    return res.status(200).json({ message: 'success to create customer', data: data });
  } catch (error) {
    console.error("Failed to create customer:", error);
    return res.status(400).json({ message: 'failed to create customer', error: error.message });
  }
  
}; 
