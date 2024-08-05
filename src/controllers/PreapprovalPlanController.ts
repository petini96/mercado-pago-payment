import { Request, Response } from "express";
import { PreapprovalPlanInput } from "../dto/preapproval-plan/PreapprovalPlanInput";
import { CreatePreapprovalPlanService, ShowPreapprovalPlanService } from "../services/preference/CreatePreapprovalPlanService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const preapprovalPlanInput: PreapprovalPlanInput = req.body;
  try {
    const data = await CreatePreapprovalPlanService(preapprovalPlanInput);
    return res.status(200).json({ message: 'success to create plan', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to create plan', error: error });
  }
}; 

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { preapprovalPlanID } = req.params;
  try {
    const data = await ShowPreapprovalPlanService(preapprovalPlanID);
    return res.status(200).json({ message: 'success to get plan', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to get plan', error: error });
  }
}; 
