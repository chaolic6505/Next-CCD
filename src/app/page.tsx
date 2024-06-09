import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Import database functions
import { getAllImages } from '../../db/queries';

export const dynamic = "force-dynamic";

// Home component
async function Home() {
    const images = await getAllImages();

    return (
        <div className="grid sm:grid-cols-3 gap-4 w-full max-w-1xl mx-auto p-4">
            {images.map((image) => (
                <Card key={image.id}>
                    <CardHeader>
                        <img
                            alt={image.name}
                            src={image.url}
                            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        />
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-lg font-bold">{image.id}</h2>
                        <p className="text-gray-600">{image.name}</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                                View more
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default function HomePage() {
    return (
        <main className="">
            <SignedOut>
                <div className="h-full w-full text-center text-2xl">
                    Please sign in above
                </div>
            </SignedOut>
            <SignedIn>
                <Home />
            </SignedIn>
        </main>
    );
}
