



import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { userTable } from './user';

export const postTable = sqliteTable('post', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	body: text('body').notNull(),
	authorId: integer('author_id').notNull().references(() => userTable.id),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
	updateAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});


export type InsertPost = typeof postTable.$inferInsert;
export type SelectPost = typeof postTable.$inferSelect;