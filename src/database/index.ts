import { Sequelize } from 'sequelize-typescript';
import Costumer from '../models/Costumer';
import PreapprovalPlan from '../models/PreapprovalPlan';
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

const models = [
   Costumer,
   PreapprovalPlan
];

sequelize.addModels(models);

export default sequelize;
