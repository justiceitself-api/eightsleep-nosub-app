import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eight Sleep Control",
  description: "Control your Eight Sleep bed and temperature schedule.",
  applicationName: "Eight Sleep Control",
  manifest: "/manifest.webmanifest",
  themeColor: "#0b1220",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html
        lang="en"
        className={cn(
          "dark",
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <body>
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
  );
}
