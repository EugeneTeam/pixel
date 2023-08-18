import { dropdb } from 'pgtools';
import { config } from 'dotenv';

config();

const dbName = process.env.POSTGRES_DB;

dropDatabase();

async function dropDatabase(): Promise<void> {
  try {
    await dropdb(
      {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        host: process.env.POSTGRES_HOST,
      },
      dbName,
    );
    console.log(`Database ${dbName} has been sucсessfully dropped!`);
  } catch (error) {
    if (error.name === 'invalid_catalog_name') {
      console.log(`Database ${dbName} does not exist!`);
    } else {
      console.log(error.message);
    }
  }
}
