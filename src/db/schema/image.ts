import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const imageTable = sqliteTable('image', {
	url: text('url').notNull(),
	id: text('id').primaryKey(),
	description: text('description'),
    userId: text('user_id').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export type InsertImage = typeof imageTable.$inferInsert;
export type SelectImage = typeof imageTable.$inferSelect;