import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/features/Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKY",
  description: "SKY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
