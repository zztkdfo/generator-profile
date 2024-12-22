import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Profile Generator",
  description: "쉽고 빠르게 깃헙 프로필을 만들어보세요",
  openGraph: {
    title: "GitHub Profile Generator",
    description: "쉽고 빠르게 깃헙 프로필을 만들어보세요",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png", // OG 이미지 경로
        width: 1200,
        height: 630,
        alt: "깃헙 프로필 Generator 미리보기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "깃헙 프로필 Generator",
    description: "쉽고 빠르게 깃헙 프로필을 만들어보세요",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
