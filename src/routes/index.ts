import express, { Router } from "express";
import preference from "./preference"; 
import hooks from "./hooks";
import cors from "cors";
import preapprovalPlan from "./preapprovalPlan";
import costumer from "./costumer";

const routes = Router();

routes.use(express.json());

routes.use(cors());
routes.use(preference);
routes.use(preapprovalPlan);
routes.use(costumer);
routes.use(hooks);

export default routes;