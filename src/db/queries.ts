import db  from './drizzle';
import { desc } from 'drizzle-orm';
import { InsertUser, userTable, imageTable } from './schema';


export async function createUser(data: InsertUser) {
  await db.insert(userTable).values(data);
}

export const getAllImages = async () => {
    //return await db.select().from(imageTable).orderBy(desc(imageTable.id)).execute();
}