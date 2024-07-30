import { Sequelize } from 'sequelize-typescript';
import Costumer from '../models/Costumer';
import PreapprovalPlan from '../models/PreapprovalPlan';
import Plan from '../models/Plan';
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

const models = [
   Costumer,
   PreapprovalPlan,
   Plan
];

sequelize.addModels(models);

export default sequelize;
