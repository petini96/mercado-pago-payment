import { CostumerInput } from "../../dto/costumer/CostumerInput";
import { createCustomerRepository } from "../../repositories/costumer/createCostumer";

export const CreateCostumerService = async (costumerInput: CostumerInput): Promise<any> => {
  try {
    const newCostumer = await createCustomerRepository(costumerInput);
    return newCostumer;
  } catch (error) {
    console.error("Create customer service error:", error);
    throw new Error("Failed to create customer: ", error);
  }
}; 
