import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Create a connection to the database
const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);

// Create the drizzle instance
export const db = drizzle(client, { schema });
