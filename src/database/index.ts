import { Sequelize } from "sequelize-typescript"; 
import Costumer from "../models/Costumer";
import PreapprovalPlan from "../models/PreapprovalPlan";
// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = [
   Costumer,
   PreapprovalPlan
];

sequelize.addModels(models);

export default sequelize;