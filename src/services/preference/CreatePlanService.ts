import { PlanInput } from '../../dto/plan/PlanInput';
import { createPlanRepository } from '../../repositories/plan/createPlan';
import { listPlanRepository } from '../../repositories/plan/listPlanRepository';
 
export const CreatePlanService = async (planInput: PlanInput): Promise<any> => {
   try {
      const newPlan = await createPlanRepository(planInput);
      return newPlan;
    } catch (error) {
      console.error("Create plan service error:", error);
      throw new Error("Failed to create plan: ", error);
    }
};

export const ListPlanService = async (limit: number, offset: number): Promise<any> => {
   try {
      const plans = await listPlanRepository(limit, offset);
      return plans;
    } catch (error) {
      console.error("List plan service error:", error);
      throw new Error("Failed to list plan: ", error);
    }
};