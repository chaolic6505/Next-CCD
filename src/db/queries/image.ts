import 'server-only';

import db from '../drizzle';
import { eq, desc } from 'drizzle-orm';
import { imageTable, InsertImage } from '../schema/image';

export const getImage = async (id: string) => {
	let res = await db.selectDistinct().from(imageTable).where(eq(imageTable._id, id));
console.log(res, 'res', id, 'id');
	return res[0];
};

export const deleteImage = async (id: string) => {
	return await db.delete(imageTable).where(eq(imageTable._id, id));
};

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
