import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit Kumar Yadav - Portfolio",
  description: "Showcasing my projects, blogs, and experience as a developer.",
  keywords: ["Rohit Kumar Yadav", "developer", "Next.js", "DevBlogger", "React", "portfolio"],
  authors: [{ name: "Rohit Kumar Yadav", url: "https://rohit.devblogger.in" }],
  openGraph: {
    title: "Rohit Kumar Yadav - Portfolio",
    description: "Explore my projects, experience, and blog posts.",
    url: "https://rohit.devblogger.in",
    siteName: "Rohit Kumar Yadav - Portfolio",
    images: [
      {
        url: "https://rohit.devblogger.in/profile.png",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Yadav",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rohit.ayadav",
    creator: "@rohit.ayadav",
    title: "Rohit Kumar Yadav - Portfolio",
    description: "Explore my projects, experience, and blog posts.",
    images: ["https://rohit.devblogger.in/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Kumar Yadav",
              url: "https://rohit.devblogger.in",
              image: "https://rohit.devblogger.in/profile.png",
              sameAs: [
                "https://github.com/rohit-ayadav",
                "https://linkedin.com/in/rohitkumaryadav-rky",
                "https://twitter.com/rohit.ayadav",
                "https://www.instagram.com/rohit.ayadav/",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "DevBlogger",
                url: "https://devblogger.in",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
