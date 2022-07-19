import knex from "knex";
import dotenv from "dotenv";
dotenv.config();
const connection = knex({
    client: "mysql",
    connection:{
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: 3306,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
    }
});
export default connection;