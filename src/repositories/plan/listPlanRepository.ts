import Plan from "../../models/Plan";

export async function listPlanRepository(limit: number, offset: number) {
  try {
    const newPlan = await Plan.findAll()
    return newPlan;
  } catch (error) {
    console.error("Create plan repository error:", error);
    throw new Error("Failed to create plan in repository: ", error);
  }
}
