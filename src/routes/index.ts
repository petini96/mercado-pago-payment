import express, { Router } from "express";
import preference from "./preference"; 
import hooks from "./hooks";
import cors from "cors";
import preapprovalPlan from "./preapprovalPlan";
import preapproval from "./preapproval";
import costumer from "./costumer"; 
import payment from "./payment";
import plan from "./plan";
import melhorEnvio from "./melhorEnvio";

const routes = Router();

routes.use(express.json());

routes.use(cors());
routes.use(preference);
routes.use(preapprovalPlan);
routes.use(preapproval);
routes.use(plan);
routes.use(costumer);
routes.use(hooks);
routes.use(payment);
routes.use(melhorEnvio);

export default routes;