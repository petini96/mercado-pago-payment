import { Router } from "express";
import * as HooksController from "../controllers/HooksController";

const hooksRoutes = Router();

hooksRoutes.post("/hooks/mercado-pago", HooksController.store);
 
export default hooksRoutes;