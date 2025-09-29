import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "켐브릿지학원 | KEM Bridge - 국어 영어 수학 연결 교육",
    template: "%s | 켐브릿지학원"
  },
  description: "켐브릿지학원은 K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다. 개별 맞춤형 교육, 입시 컨설팅, 독서·논술 프로그램을 제공합니다.",
  keywords: ["켐브릿지학원", "KEM Bridge", "국어", "영어", "수학", "학원", "입시컨설팅", "독서논술", "학생부컨설팅", "양주학원", "옥정학원"],
  authors: [{ name: "켐브릿지학원", url: "https://kembridge.co.kr" }],
  creator: "켐브릿지학원",
  publisher: "켐브릿지학원",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kembridge.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://kembridge.co.kr',
    siteName: '켐브릿지학원',
    title: '켐브릿지학원 | KEM Bridge - 국어 영어 수학 연결 교육',
    description: 'K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다. 개별 맞춤형 교육, 입시 컨설팅, 독서·논술 프로그램을 제공합니다.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '켐브릿지학원 KEM Bridge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '켐브릿지학원 | KEM Bridge - 국어 영어 수학 연결 교육',
    description: 'K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData type="organization" data={{}} />
        <StructuredData type="localBusiness" data={{}} />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
