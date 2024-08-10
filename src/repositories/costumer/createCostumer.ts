import { CustomerInput } from "../../dto/customer/CustomerInput";
import Customer from "../../models/Customer";

export async function createCustomerRepository(customerInput: CustomerInput) {
  try {
    const newCustomer = await Customer.create({
      name: customerInput.name,
      email: customerInput.email,
    });
    return newCustomer;
  } catch (error) {
    console.error("Create customer repository error:", error);
    throw new Error("Failed to create customer in repository: ", error);
  }
}
