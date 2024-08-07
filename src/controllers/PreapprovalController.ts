import { Request, Response } from "express";
import { PreapprovalInput } from "../dto/preapproval/PreapprovalInput";
import { CreatePreapprovalService } from "../services/preference/CreatePreapprovalService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const preapprovalInput: PreapprovalInput = req.body;
  try {
    const data = await CreatePreapprovalService(preapprovalInput);
    return res.status(200).json({ message: 'success to create preapproval', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to create preapproval', error: error });
  }
};