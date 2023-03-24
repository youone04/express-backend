import Sequelize from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const sequalize = new Sequelize(process.env.DB_NAME , process.env.DB_USER , process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    timestamps: false,
    port : process.env.PORT,
    dialect : process.env.DB_DIALECT,
    dialectModule : mysql2,
    logging: false,
    dialectOptions : {
        requestTimeout : 30000,
        encrypt: true
    }

});

export default sequalize