import db from '../drizzle';
import { desc } from 'drizzle-orm';
import { imageTable, InsertImage } from '../schema/image';

export const getAllImages = async () => {
	return await db
		.select()
		.from(imageTable)
		.orderBy(desc(imageTable.createdAt))
		.all();
};

export const uploadImage = async (data: InsertImage) => {
	return await db.insert(imageTable).values(data).execute();
};
