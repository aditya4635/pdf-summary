import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/common/header";
import Footer from "@/components/ui/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Adiya | PDF Summary Generator",
  description: "Easily generate PDF summaries with Adiya.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${fontSans.className} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="relative z-10 ">
          <Header />
          </header>
          <div>
          <main className=" relative flex-grow z-10 ">{children}</main>
          </div>
          <Toaster />
          <footer className="relative z-10">
          <Footer />
          </footer>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
