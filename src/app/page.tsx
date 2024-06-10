
"use client";

import Image from "next/image";
import { useSignIn } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton , SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import ImagesCard from './_components/ImagesCard';
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const header = {
    title: "Chao Chao Dog",
  };

// Home component
const Home = () => {
    const { user } = useUser();
    const uploadImage = useMutation(api.image.uploadImage);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ImagesCard />
        </main>
    );
}

export default function HomePage() {
    const { isLoaded, signIn } = useSignIn();

    return (
        <main className="">
            <SignedOut>
            <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/examples/authentication"
                className={cn(
                buttonVariants({ variant: 'default' }),
                    'absolute right-4 top-4 hidden md:right-8 md:top-8'
                )}
            >
                Login
            </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                        <div className="absolute inset-0 bg-[#CCD0CF]" />
                        <div className="relative z-20 flex items-center text-lg font-medium">
                            <Image
                                width={40}
                                height={40}
                                src="/logo.png"
                                className="rounded"
                                alt="an image of a brain"
                            />
                            <p className="text-lg text-black ml-5">
                                {header.title}
                            </p>
                        </div>
                        <div className="relative z-20 mt-auto">
                            <blockquote className="space-y-2">
                                <p className="text-lg text-black">
                                &ldquo;Sample..............&rdquo;
                                </p>
                            </blockquote>
                        </div>
                </div>

                <div className="flex h-full items-center p-4 lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center mb-5">
                            <Unauthenticated>
                                <div className="bg-[#9BA8AB] rounded-lg pt-3 pb-3 mb-10">
                                    <SignInButton />
                                </div>
                                <div className="mt-10">
                                    <p className="px-8 text-center text-sm text-muted-foreground">
                                    By clicking continue, you agree to our{' '}
                                    <Link
                                        href="/terms"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                        and{' '}
                                    <Link
                                        href="/privacy"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                    </p>
                                </div>
                            </Unauthenticated>
                        </div>
                    </div>
                </div>
            </div>
            </SignedOut>
            <SignedIn>
                <Header />
                <Home />
            </SignedIn>
        </main>
    );
}
