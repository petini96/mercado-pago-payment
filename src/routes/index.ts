import { Router } from "express";
 
import preference from "./preference";
import cors from "cors";

const routes = Router();

routes.use(cors());
routes.use(preference);

export default routes;