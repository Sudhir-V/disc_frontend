import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "../components/ui/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DISC Futura Assessment",
  description: "Next-generation DISC behavioral assessment engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
