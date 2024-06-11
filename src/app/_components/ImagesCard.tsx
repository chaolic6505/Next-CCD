"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import ImageSkeleton from "./ImageSkeleton";

export default function ImagesCard() {
	const images = useQuery(api.image.getImages, { archived: false });

	return (
		<div className="grid sm:grid-cols-3 gap-4 w-full max-w-1xl mx-auto p-4">
			{!images && <ImageSkeleton />}
			{images
				? images?.map((image) => (
						<Card key={image._id}>
							<CardHeader>
								<Link href={`/img/${image._id}`}>
									<Image
										width={300}
										height={700}
										src={image.url}
										alt={image.url}
										className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
									/>
								</Link>
							</CardHeader>

							<CardContent>
								<CardDescription>{image.name}</CardDescription>
								<div className="flex items-center space-x-2 mt-2">
									<Link
										href="#"
										className="text-blue-500 hover:underline"
										prefetch={false}
									>
										View more
									</Link>
								</div>
							</CardContent>
						</Card>
					))
				: null}
		</div>
	);
}
