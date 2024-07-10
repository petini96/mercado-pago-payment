import express, { Router } from "express";
 
import preference from "./preference"; 
import hooks from "./hooks";

import cors from "cors";
import plan from "./plan";

const routes = Router();

routes.use(express.json());

routes.use(cors());
routes.use(preference);
routes.use(plan);
routes.use(hooks);

export default routes;