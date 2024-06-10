
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
console.log('process.env.NEXT_PUBLIC_DATABASE_URL', process.env.NEXT_PUBLIC_DATABASE_URL);
const client = createClient({ url: process.env.NEXT_PUBLIC_DATABASE_URL!, authToken: process.env.NEXT_PUBLIC_AUTH_TOKEN });
const db = drizzle(client);

export default db;