import { Router } from "express";

import * as ProductPreferenceController from "../controllers/ProductPreferenceController";

const preferenceRoutes = Router();

preferenceRoutes.post("/preferences/product", ProductPreferenceController.store);
 
 
export default preferenceRoutes;