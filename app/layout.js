import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@/components/Nav";
import Image from "next/image";

export const metadata = {
  title: "Grazing Table",
  description: "Food Made by People Who Care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
