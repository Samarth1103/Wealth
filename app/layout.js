import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({subsets:["latin"]});


export const metadata = {
  title: "Wealth",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header/>
        <main className="min-h-screen">{children} </main>
        <Toaster richColors/>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center text-gray-600 px-4">
            <p>© 2025 Wealth — Created by Samarth Tembe to help you track your income and expenses effortlessly.h</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
 
