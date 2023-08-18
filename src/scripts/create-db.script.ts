import { createdb } from 'pgtools';
import { config } from 'dotenv';

config();

const dbName = process.env.POSTGRES_DB;

createDatabase();

async function createDatabase(): Promise<void> {
  try {
    await createdb(
      {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        host: process.env.POSTGRES_HOST,
      },
      dbName,
    );
    console.log(`Database ${dbName} has been sucсessfully created!`);
  } catch (error) {
    if (error.name === 'duplicate_database') {
      console.log(`Database ${dbName} already exists!`);
    } else {
      console.log(error.message);
    }
  }
}
