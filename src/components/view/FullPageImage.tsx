'use client';
import { clerkClient } from '@clerk/nextjs/server';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Button } from '@/components/ui/button';
import { Id } from '../../../convex/_generated/dataModel';
//import { deleteImage, getImage } from '@/db/queries/image';

const FullPageImage = (props: { photoId: Id<'image'> }) => {
	//const image = await getImage(props.photoId);
	const image = useQuery(api.image.getImage, { id: props.photoId });
	console.log(image, 'image');
	//const userInfo = await clerkClient.users.getUser(image.userId);

	return image ? (
		<div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
			<div className="flex-shrink flex-grow">
				<img
					src={image.url}
					alt={image.url}
					className="object-contain"
				/>
			</div>
			<div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
				<div className="border-b p-2 text-center text-xl">
					{image.name}
				</div>

				{/* <div className="p-2">
					<div>Uploaded By:</div>
					<div>{userInfo.fullName}</div>
				</div> */}

				<div className="p-2">
					<div>Created On:</div>
					<div>{image._creationTime}</div>
				</div>

				{/* <div className="p-2">
					<form
						action={async () => {
							'use server';

							await deleteImage(props.photoId);
						}}
					>
						<Button type="submit" variant="destructive">
							Delete
						</Button>
					</form>
				</div> */}
			</div>
		</div>
	) : null;
};

export default FullPageImage;
