import { CostumerInput } from "../../dto/costumer/CostumerInput";
import Customer from "../../models/Costumer";

export async function createCustomerRepository(costumerInput: CostumerInput) {
  try {
    const newCustomer = await Customer.create({
      name: costumerInput.name,
      email: costumerInput.email,
    });
    return newCustomer;
  } catch (error) {
    console.error("Create customer repository error:", error);
    throw new Error("Failed to create customer in repository: ", error);
  }
}
