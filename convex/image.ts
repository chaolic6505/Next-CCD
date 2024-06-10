import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getImages = query({
	args: {},
	handler: async (ctx, args) => ctx.db.query('image').order('desc').collect(),
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
		});

		return image;
	},
});
