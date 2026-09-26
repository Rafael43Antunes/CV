import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from './language';



export const metadata: Metadata = {
  title: "Rafael Antunes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
            {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
