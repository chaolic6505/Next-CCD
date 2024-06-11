"user client";

import { Modal } from "./modal";
import FullPageImage from "@/components/view/FullPageImage";
import { Id } from "../../../../../convex/_generated/dataModel";

export default function PhotoModal({
	params: { id: photoId },
}: {
	params: { id: Id<"image"> };
}) {
	console.log(photoId, "photoId");
	return (
		<Modal>
			<FullPageImage photoId={photoId} />
		</Modal>
	);
}
