import { Router } from "express";
import * as PaymentController from "../controllers/PaymentController";

const paymentRoutes = Router();

paymentRoutes.post("/payments", PaymentController.store);
 
export default paymentRoutes;