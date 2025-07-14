import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

db.on('connect', () => {
  console.log('db conectado com sucesso!');
});

export { db };