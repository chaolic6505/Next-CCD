import db  from '../drizzle';
import { InsertUser, userTable } from '../schema/user';

export async function createUser(data: InsertUser) {
  await db.insert(userTable).values(data);
}