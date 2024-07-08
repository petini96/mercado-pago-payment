import express, { Router } from "express";
 
import preference from "./preference";
 
import cors from "cors";
import hooks from "./hooks";

const routes = Router();

routes.use(express.json());

routes.use(cors());
routes.use(preference);
routes.use(hooks);

export default routes;