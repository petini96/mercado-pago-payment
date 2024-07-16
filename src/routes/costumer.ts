import { Router } from "express";
import * as CostumerController from "../controllers/CostumerController";

const costumerRoutes = Router();

costumerRoutes.post("/costumers", CostumerController.store);
 
export default costumerRoutes;