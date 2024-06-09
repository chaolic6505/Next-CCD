import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Card, CardHeader, CardContent } from "@/components/ui/card"

//import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const urls = [
  "https://utfs.io/f/1b6bf68d-7c0f-4060-88c9-48ed1a042ed6-c57j10.jpeg",
  "https://utfs.io/f/18f21c32-2c33-4e6d-9edc-1807cbb31fbd-qqdq14.jpeg",
  "https://utfs.io/f/c360d58a-1786-4be3-a33e-3a2294f03a15-qgr3xa.jpeg",
  "https://utfs.io/f/d4602909-468e-458b-a747-7beedf3461e1-sbkjt9.jpeg",
  "https://utfs.io/f/370172b7-c607-4dac-8bd5-ead613b478d3-2x37qk.jpeg",
];

const mockImages = urls.map((url, index) => ({
  url,
  id: index + 1,
}));

async function Images() {
  return (
    <main className="grid sm:grid-cols-3 gap-4 w-full max-w-1xl mx-auto p-4">
      {mockImages.map((image) => (
      <Card>
      <CardHeader>
        <img
            alt="Image 1"
            src={image.url}
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-bold">Image 1</h2>
        <p className="text-gray-600">Image 1 description</p>
        <div className="flex items-center space-x-2 mt-2">

          <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
            View more
          </Link>
        </div>
      </CardContent>
    </Card>
      ))}
    </main>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
