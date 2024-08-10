import { PlanInput } from '../../dto/plan/PlanInput';
import { PlanOutput } from '../../dto/plan/PlanOutput';
import { createPlanRepository } from '../../repositories/plan/createPlan';
import { listPlanRepository } from '../../repositories/plan/listPlanRepository';
import { showPlanRepository } from '../../repositories/plan/showPlanRepository';

export const CreatePlanService = async (planInput: PlanInput): Promise<PlanOutput> => {

  try {
    const newPlan = await createPlanRepository(planInput)

    return {
      id: newPlan.id,
      name: newPlan.name,
      description: newPlan.description,
      frequency: newPlan.frequency,
      price: newPlan.price,
      mercadoPagoPlanId: newPlan.mercadoPagoPlanId
    } as PlanOutput

  } catch (error) {
    console.error("Create plan service error:", error)
    throw new Error("Failed to create plan: ", error)
  }

}

export const ListPlanService = async (limit: number, offset: number): Promise<any> => {

  try {
    const plans = await listPlanRepository(limit, offset);
    return plans;
  } catch (error) {
    console.error("List plan service error:", error);
    throw new Error("Failed to list plan: ", error);
  }

};

export const ShowPlanService = async (id: string | number): Promise<any> => {

  try {
    const plan = await showPlanRepository(id);
    return plan;
  } catch (error) {
    console.error("Show plan service error:", error);
    throw new Error("Failed to show plan: ", error);
  }
  
};