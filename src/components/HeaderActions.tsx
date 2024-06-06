"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

const HeaderActions = () => {
  return (
    <>
      {/* <Unauthenticated>
				<SignInButton />
			</Unauthenticated>

			<Authenticated>
				<UserButton />
			</Authenticated> */}

      <AuthLoading>Loading...</AuthLoading>
    </>
  );
};

export default HeaderActions;
