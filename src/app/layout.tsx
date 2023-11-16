import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav";

export const metadata: Metadata = {
  title: "Samess",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} max-w-[1100px] min-h-screen flex flex-col md:px-32 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40">
            <div className="container flex h-16 items-center justify-between py-4">
              <Navbar />
            </div>
          </header>
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
