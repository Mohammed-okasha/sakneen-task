import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import TanStackQueryProvider from "@/providers/TanStackQueryProvider";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Units App - Home",
  description:
    "Explore real estate listings with Units App — a responsive React-based interface for browsing, searching, sorting, and previewing unit details with image galleries and pagination support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div id="app" className="flex flex-col min-h-screen">
          <TanStackQueryProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </TanStackQueryProvider>
        </div>
      </body>
    </html>
  );
}
