import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "mermory",
  description: "transforming education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </head>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
