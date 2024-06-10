import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { update } from '../../../convex/forms';

export const imageTable = sqliteTable('image', {
	name: text('name'),
	url: text('url').notNull(),
	_id: text('_id').primaryKey(),
	description: text('description'),
	userId: text('user_id').notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
});

export type InsertImage = typeof imageTable.$inferInsert;
export type SelectImage = typeof imageTable.$inferSelect;
