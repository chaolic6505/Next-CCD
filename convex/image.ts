
import {
    MutationCtx,
    QueryCtx,
    action,
    internalAction,
    internalMutation,
    internalQuery,
    mutation,
    query
} from "./_generated/server";

export const getImages
    = query({
        args: {},
        handler: async (ctx, args) => {
            return ctx.db.query("image").collect();
        },
    });

