import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aeria Solutions - L1C Training",
  description: "Level 1 Complex (L1C) RPAS Training - Transport Canada Certified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
