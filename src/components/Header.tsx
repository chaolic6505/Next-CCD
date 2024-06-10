"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useMutation, Authenticated } from "convex/react";

import HeaderActions from "./HeaderActions";
import { UploadButton } from "../utils/uploadthing";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { api } from "../../convex/_generated/api";
import { use } from "react";

const header = {
  title: "Chao Chao Dog",
};

const Header = () => {
    const { user } = useUser();
    const uploadImage = useMutation(api.image.uploadImage);

    return (
    <div className="z-10 relative py-2 bg-[#CCD0CF] dark:bg-[#11212D]" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
            <Link href="/" className="flex items-center gap-4 text-2xl">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              className="rounded"
              alt="an image of a brain"
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <nav className="flex items-center gap-8">
          {user && user?.id == 'user_2gfs8voqQwlIuXC4cuu5ugMtfrj' ? <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (user) uploadImage({
                        url: res[0].url,
                        name: res[0].name,
                        userId: user.id,
                    })
                }}
            /> : null}
            {/* <OrganizationSwitcher /> */}

            <Authenticated>
                <Link href="/dashboard" className="hover:underline">
                    Dashboard
                </Link>
                <HeaderActions />
            </Authenticated>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
