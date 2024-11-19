import { Router } from "express";
import * as MelhorEnvioController from "../controllers/MelhorEnvioController";

const melhorEnvioRoutes = Router();

melhorEnvioRoutes.post("/shipment-calculate", MelhorEnvioController.store);
// melhorEnvioRoutes.get("/plans/:id", PlanController.show);
 
export default melhorEnvioRoutes;