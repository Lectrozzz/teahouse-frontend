import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fredoka } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "TeaHouse",
	description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({
	weight: "400",
	subsets: ["latin"],
	display: "auto",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fredoka.className} bg-gray-100`}>
				{children}
			</body>
		</html>
	);
}
