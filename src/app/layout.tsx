import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono"
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Saheb Khadem",
	description:
		"Web developer specializing in Next.js, React, and TypeScript. Available for freelance projects. Crypto payments accepted."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-mono",
				jetbrainsMono.variable,
				geistHeading.variable
			)}
		>
			<body className="dark flex min-h-full flex-col">{children}</body>
		</html>
	);
}
