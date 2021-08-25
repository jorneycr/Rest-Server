import { Sequelize } from "sequelize";

const db = new Sequelize('ts-rest-server', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    // logging:false,
});

export default db;