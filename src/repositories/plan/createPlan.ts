import { PlanInput } from "../../dto/plan/PlanInput";
import Plan from "../../models/Plan";

export async function createPlanRepository(planInput: PlanInput): Promise<Plan> {
  try {
    const newPlan = await Plan.create({
      name: planInput.name,
      description: planInput.description,
      frequency: planInput.frequency,
      price: planInput.price,
      mercadoPagoPlanId: planInput.mercadoPagoPlanId
    });
    return newPlan;
  } catch (error) {
    console.error("Create plan repository error:", error);
    throw new Error("Failed to create plan in repository: ", error);
  }
}
