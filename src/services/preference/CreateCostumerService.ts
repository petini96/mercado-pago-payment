import { CustomerInput } from "../../dto/customer/CustomerInput";
import { createCustomerRepository } from "../../repositories/costumer/createCostumer";

export const CreateCustomerService = async (customerInput: CustomerInput): Promise<any> => {

  try {
    const newCostumer = await createCustomerRepository(customerInput);
    return newCostumer;
  } catch (error) {
    console.error("Create customer service error:", error);
    throw new Error("Failed to create customer: ", error);
  }
  
}; 
