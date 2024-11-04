
import type { Metadata } from "next";
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SessionProvider, signIn, signOut } from "next-auth/react";
import theme from "@/MUI/theme";
import type { Authentication, Navigation, Branding } from "@toolpad/core";
import { auth } from "@/auth";
import { NAVIGATION } from "@/Navigation";

const AUTHENTICATION: Authentication = {
  signIn,
  signOut,
};


const BRANDING: Branding = {
  title: "Stonksy",
  logo: "",
};


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let nav = NAVIGATION;

  const session = await auth();
  if (!session?.user) {
    nav = []
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AppProvider navigation={nav} theme={theme} branding={BRANDING} authentication={AUTHENTICATION} session={session}>
              {children}
            </AppProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
