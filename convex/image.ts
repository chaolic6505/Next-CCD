import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { arch } from 'os';

export const deleteImage = mutation({
	args: {
		id: v.id('image'),
	},
	handler: async (ctx, args) => {
		const { id } = args;
		await ctx.db.patch(id, { archived: true });
	},
});

export const getImage = query({
	args: {
		id: v.id('image'),
	},
	handler: async (ctx, args) => {
		const { id } = args;
		const image = await ctx.db.get(id);

		return image;
	},
});

export const getImages = query({
	args: {
		archived: v.optional(v.boolean()),
	},
	handler: async (ctx, args) => {
		const { archived } = args;
		const images = await ctx.db
			.query('image')
			.filter((q) => q.eq(q.field('archived'), archived ?? false))
			.order('desc')
			.collect();

		return images;
	},
});

export const uploadImage = mutation({
	args: {
		url: v.string(),
		name: v.string(),
		userId: v.string(),
	},
	handler: async (ctx, args) => {
		const image = await ctx.db.insert('image', {
			url: args.url,
			name: args.name,
			userId: args.userId,
			archived: false,
		});

		return image;
	},
});
