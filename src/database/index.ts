import { Sequelize } from 'sequelize-typescript';
import Customer from '../models/Customer';
import PreapprovalPlan from '../models/PreapprovalPlan';
import Plan from '../models/Plan';
import Subscription from '../models/Subscription';
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

const models = [
   Customer,
   PreapprovalPlan,
   Plan,
   Subscription
];

sequelize.addModels(models);

export default sequelize;
