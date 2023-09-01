import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DATABASE_END_POINT,
    port: process.env.PORT,
    database: process.env.POSTGRES_DB,
  });
}

export default conn ;