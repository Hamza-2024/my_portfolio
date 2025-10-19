import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Hamza Anter | Computer Engineering Student & Full-Stack Developer",
  description: "Portfolio showcasing full-stack development projects and engineering expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8T504QTK0X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8T504QTK0X');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
