import { Request, Response } from "express";
import { PlanInput } from "../dto/plan/PlanInput";
import { CreatePlanService, ListPlanService, ShowPlanService } from "../services/preference/CreatePlanService";
import { Pagination } from "../dto/pagination/Pagination";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const planInput: PlanInput = req.body;

  try {
    const data = await CreatePlanService(planInput);
    return res.status(201).json({ message: 'success to create plan', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to create plan', error: error });
  }
  
};

export const list = async (req: Request, res: Response): Promise<Response> => {
  const { limit, offset }: Pagination = req.query as unknown as Pagination;

  try {
    const data = await ListPlanService(limit, offset);
    return res.status(200).json({ message: 'success to get plan', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to get plan', error: error });
  }

}; 

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const plan = await ShowPlanService(id);

  return res.status(200).json(plan);
};