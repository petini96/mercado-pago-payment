import { Router } from "express";

import * as PlanController from "../controllers/PlanController";

const planRoutes = Router();

planRoutes.post("/plans", PlanController.store);
 
export default planRoutes;