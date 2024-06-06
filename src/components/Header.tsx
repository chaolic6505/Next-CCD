"use client";

import Link from "next/link";
import Image from "next/image";
import { Authenticated } from "convex/react";
import { OrganizationSwitcher } from "@clerk/nextjs";

import HeaderActions from "./HeaderActions";
import { ModeToggle } from "@/components/ui/mode-toggle";

const header = {
  title: "Chao Chao Dog",
};

const Header = () => {
  return (
    <div className="z-10 relative py-4 light: dark:bg-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <ModeToggle />
          <Link href="/" className="flex items-center gap-4 text-2xl">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              className="rounded"
              alt="an image of a brain"
            />
            {header.title}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <nav className="flex items-center gap-8">
            {/* <OrganizationSwitcher /> */}

            <Authenticated>
              <Link href="/dashboard" className="hover:text-slate-300">
                Dashboard
              </Link>
            </Authenticated>
          </nav>
          <HeaderActions />
        </div>
      </div>
    </div>
  );
};

export default Header;
