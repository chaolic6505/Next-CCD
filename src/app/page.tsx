
import { SignedIn, SignedOut } from "@clerk/nextjs";

// Import database functions
//import { getAllImages } from '../db/queries';
import ImagesCard from './_components/ImagesCard';
export const dynamic = "force-dynamic";



// Home component
async function Home() {
    return (
        <ImagesCard />
    );
}

export default function HomePage() {
    return (
        <main className="">
            <SignedOut>
                <div className="h-full w-full text-center text-2xl mt-5">
                    Welcome
                </div>
            </SignedOut>
            <SignedIn>
                <Home />
            </SignedIn>
        </main>
    );
}
