import { Router } from "express";
import * as PreapprovalController from "../controllers/PreapprovalController";

const preapprovalRoutes = Router();

preapprovalRoutes.post("/preapproval", PreapprovalController.store); 
 
export default preapprovalRoutes;