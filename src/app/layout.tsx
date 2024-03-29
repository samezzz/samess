import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav";
import { siteConfig } from "@/config/site";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Portfolio", "Developer", "Next js", "React"],
	authors: [
		{
			name: "samess",
			url: "https://samess.vercel.app" || "https://samess.tech",
		},
	],
	creator: "samess",
	// openGraph: {
	//   type: "website",
	//   locale: "en_US",
	//   url: siteConfig.url,
	//   title: siteConfig.name,
	//   description: siteConfig.description,
	//   siteName: siteConfig.name,
	// },
	// twitter: {
	//   card: "summary_large_image",
	//   title: siteConfig.name,
	//   description: siteConfig.description,
	//   images: [`${siteConfig.url}/og.jpg`],
	//   creator: "@samess",
	// },
	icons: {
		icon: "/favicon.ico",
	},
	// manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body
				className={`${GeistSans.className} dark:bg-[#111010] min-h-screen flex flex-col antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="sticky top-0 z-40 ">
						<div className="container flex h-16 items-center justify-between py-4">
							<Navbar />
						</div>
					</header>
					<div className="container">
						{children}
						<Analytics />
					</div>
					{/* <ModeToggle /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
