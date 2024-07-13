import { Router } from "express";
import * as PreapprovalPlanController from "../controllers/PreapprovalPlanController";

const planRoutes = Router();

planRoutes.post("/preapproval-plans", PreapprovalPlanController.store);
planRoutes.get("/preapproval-plans/:preapprovalPlanID", PreapprovalPlanController.show);
 
export default planRoutes;