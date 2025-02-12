import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabby",
  description: "Zulkar Naeem Rabby Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#F9FAFD] dark:bg-[#0E1217] text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar></Navbar> */}
            <div className="min-h-screen">{children}</div>
            {/* <Footer></Footer> */}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
