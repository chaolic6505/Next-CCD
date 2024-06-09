import { sql } from "drizzle-orm";
import { serial, index, integer, text, boolean, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable('user', {
    id: varchar('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
    email: text('email').notNull().unique(),
  });

export const imageTable = pgTable("image", {
    id: integer("id").primaryKey(),
    url: varchar("url", { length: 1024 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),

    createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
    updatedAt: timestamp("updatedAt")
    .$onUpdate(() => new Date()),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const todo = pgTable("todo", {
    id: integer("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    userId: varchar("userId", { length: 256 })
      .notNull()
      .references(() => userTable.id, { onDelete: 'cascade' }),
});


export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;

export type InsertImage = typeof imageTable.$inferInsert;
export type SelectImage= typeof imageTable.$inferSelect;