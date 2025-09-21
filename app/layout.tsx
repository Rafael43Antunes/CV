import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Rafael Antunes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="poppins.className">
        {children}
      </body>
    </html>
  );
}
