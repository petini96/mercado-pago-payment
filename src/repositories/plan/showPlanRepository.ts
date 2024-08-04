import Plan from "../../models/Plan";

export async function showPlanRepository(id: number | string) {
  try {
    const plan = await Plan.findByPk(id)
    if (!plan) {
      throw new Error("Plan not found");
    }
    return plan;
  } catch (error) {
    console.error("Show plan repository error:", error);
    throw new Error("Failed to show plan in repository: ", error);
  }
}
