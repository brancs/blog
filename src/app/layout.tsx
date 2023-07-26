import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const fontFamily = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brancs Blog | Home",
  description: "Blog by Brancs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
