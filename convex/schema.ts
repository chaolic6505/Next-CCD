import { v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';
import { desc } from 'drizzle-orm';

export default defineSchema({
	forms: defineTable({
		createdBy: v.string(),
		description: v.optional(v.string()),
		name: v.optional(v.string()),
		slug: v.string(),
	}).index('by_slug', ['slug']),
	form_responses: defineTable({
		formId: v.id('forms'),
		slug: v.optional(v.string()),
		values: v.array(v.object({ name: v.string(), value: v.string() })),
	}),
	form_fields: defineTable({
		formId: v.string(),
		name: v.string(),
		order: v.float64(),
		selectOptions: v.optional(v.array(v.string())),
		type: v.string(),
	}),
	memberships: defineTable({
		orgId: v.string(),
		userId: v.string(),
	}).index('by_orgId_userId', ['orgId', 'userId']),
	documents: defineTable({
		title: v.string(),
		description: v.optional(v.string()),
		tokenIdentifier: v.optional(v.string()),
		orgId: v.optional(v.string()),
		embedding: v.optional(v.array(v.float64())),
		fileId: v.id('_storage'),
	})
		.index('by_tokenIdentifier', ['tokenIdentifier'])
		.index('by_orgId', ['orgId'])
		.vectorIndex('by_embedding', {
			vectorField: 'embedding',
			dimensions: 1536,
			filterFields: ['tokenIdentifier', 'orgId'],
		}),
	notes: defineTable({
		text: v.string(),
		orgId: v.optional(v.string()),
		embedding: v.optional(v.array(v.float64())),
		tokenIdentifier: v.optional(v.string()),
	})
		.index('by_tokenIdentifier', ['tokenIdentifier'])
		.index('by_orgId', ['orgId'])
		.vectorIndex('by_embedding', {
			vectorField: 'embedding',
			dimensions: 1536,
			filterFields: ['tokenIdentifier', 'orgId'],
		}),
	chats: defineTable({
		documentId: v.id('documents'),
		tokenIdentifier: v.string(),
		isHuman: v.boolean(),
		text: v.string(),
	}).index('by_documentId_tokenIdentifier', [
		'documentId',
		'tokenIdentifier',
	]),
	image: defineTable({
		url: v.string(),
		userId: v.string(),
		name: v.optional(v.string()),
		updated: v.optional(v.string()),
		archived: v.optional(v.boolean()),
		description: v.optional(v.string()),
	}),
});
