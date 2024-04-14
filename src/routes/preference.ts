import { Router } from "express";

import * as PreferenceController from "../controllers/PreferenceController";

const preferenceRoutes = Router();

preferenceRoutes.post("/preferences", PreferenceController.store);
 
 
export default preferenceRoutes;