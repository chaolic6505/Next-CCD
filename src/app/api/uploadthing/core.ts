import { UploadThingError } from "uploadthing/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

import { generateRandomString } from "@/lib/utils";
import { uploadImage } from "@/db/queries/image";
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const user = auth();
      if (!user.userId) throw new UploadThingError("Unauthorized");
      if (user.userId !== "user_2gfs8voqQwlIuXC4cuu5ugMtfrj")
        throw new UploadThingError("Unauthorized");

      const fullUserData = await clerkClient.users.getUser(user.userId);

      //   if (fullUserData?.privateMetadata?.["can-upload"] !== true)
      //     throw new UploadThingError("User Does Not Have Upload Permissions");

      //   const { success } = await ratelimit.limit(user.userId);
      //   if (!success) throw new UploadThingError("Ratelimited");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const id = generateRandomString(16);
      uploadImage({
        _id: id,
        url: file.url,
        userId: metadata.userId,
        description: "test file name",
      });

      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
