import { Router } from "express";
import * as PreapprovalPlanController from "../controllers/PreapprovalPlanController";

const preapprovalPlanRoutes = Router();

preapprovalPlanRoutes.post("/preapproval-plans", PreapprovalPlanController.store);
preapprovalPlanRoutes.get("/preapproval-plans/:preapprovalPlanID", PreapprovalPlanController.show);
 
export default preapprovalPlanRoutes;