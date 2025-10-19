import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata = {
  title: "John Doe | Full-Stack Developer & UX Engineer",
  description: "Premium portfolio showcasing full-stack development and UX engineering projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
