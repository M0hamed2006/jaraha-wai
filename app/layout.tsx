import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "جرعة وعي - الوعي النفسي وتطوير الذات",
  description: "موقع متخصص في التوعية النفسية وتطوير الذات بطريقة مبسطة وسهلة الفهم",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white dark:bg-gray-900">{children}</body>
    </html>
  );
}
