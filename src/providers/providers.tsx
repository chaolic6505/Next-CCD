"use client";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { ThemeProvider } from "@/components/theme-provider";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
            enableSystem
			attribute='class'
			defaultTheme='light'
			disableTransitionOnChange
		>
			<OtherProviders>{children}</OtherProviders>
		</ThemeProvider>
	);
}

function OtherProviders({ children }: { children: React.ReactNode }) {
	const { resolvedTheme } = useTheme();

	return (
		<ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            // appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
		>
			<ConvexProviderWithClerk
				client={convex}
				useAuth={useAuth}
			>
				{children}
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}
