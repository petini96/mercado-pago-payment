import { Router } from "express";
import * as PlanController from "../controllers/PlanController";

const planRoutes = Router();

planRoutes.post("/plans", PlanController.store);
planRoutes.get("/plans", PlanController.list);
planRoutes.get("/plans/:id", PlanController.show);
 
export default planRoutes;