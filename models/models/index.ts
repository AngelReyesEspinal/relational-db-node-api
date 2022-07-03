'use strict';

import { Sequelize } from "sequelize-typescript";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db: any = {};
import { User } from "./user";
import { Todo } from "./todo";
import { UserTodos } from "./usertodos";

let sequelize: any = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    ...config,
    models: [ User, Todo, UserTodos ]
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
