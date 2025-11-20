import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Inisialisasi font Montserrat dengan konfigurasi yang diinginkan
const montserrat = Montserrat({
  subsets: ["latin"], // Pilih subset karakter, 'latin' adalah yang paling umum
  weight: ["400", "700"], // Impor bobot font yang dibutuhkan (400=regular, 700=bold)
});

export const metadata: Metadata = {
  title: "WeRent Group A",
  description: "We Rent, We Return, We Repeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
