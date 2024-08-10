import { Router } from "express";
import * as CustomerController from "../controllers/CustomerController";

const customerRoutes = Router();

customerRoutes.post("/customers", CustomerController.store);
 
export default customerRoutes;