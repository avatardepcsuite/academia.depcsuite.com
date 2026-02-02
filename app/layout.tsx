import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CurrencyProvider } from '@/contexts/currency-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2D1B4E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://academia.depcsuite.com'),
  title: {
    default: 'Academia DePC | La comunidad tech más activa de Argentina y Latinoamerica. Certificación nacional e internacional',
    template: '%s | Academia DePC'
  },
  description: 'Academia DePC ofrece diplomaturas de programación React.js, Node.js, Web Full Stack, Python, PHP Laravel y Excel con doble certificación (nacional e internacional). Cursos 100% online con clases en vivo, webinars gratuitos, hackathones presenciales y portal de empleo exclusivo. La comunidad tech más activa de Argentina y Latinoamerica.',
  keywords: [
    'cursos de programacion',
    'academia de programacion',
    'diplomatura full stack',
    'curso python',
    'curso php laravel',
    'curso excel',
    'certificacion programacion',
    'aprender a programar',
    'bootcamp programacion',
    'desarrollo web',
    'React',
    'Node.js',
    'JavaScript',
    'cursos online argentina',
    'formacion tecnologia',
    'comunidad tech',
    'hackathon',
    'webinars tecnologia',
    'portal empleo tecnologia',
    'certificacion internacional programacion',
    'curso react js',
    'curso node js',
    'curso django',
    'curso laravel',
    'inteligencia artificial programacion',
    'openai api',
    'desarrollador full stack',
    'desarrollador web junior',
  ],
  authors: [{ name: 'Academia DePC', url: 'https://academia.depcsuite.com' }],
  creator: 'Academia DePC',
  publisher: 'Academia DePC',
  generator: 'Next.js',
  applicationName: 'Academia DePC',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://academia.depcsuite.com',
    siteName: 'Academia DePC',
    title: 'Academia DePC | La comunidad tech más activa de Argentina y Latinoamerica. Certificación nacional e internacional',
    description: 'Diplomaturas de programacion Full Stack, Python, PHP Laravel y Excel con doble certificacion. Clases en vivo, webinars gratuitos, hackathones y portal de empleo. La comunidad tech mas activa de Argentina y LATAM.',
    images: [
      {
        url: '/images/logo-depc-cuadrado.jpg',
        width: 1200,
        height: 630,
        alt: 'Academia DePC - Cursos de Programacion y Tecnologia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia DePC | Cursos de Programacion con Certificacion',
    description: 'Diplomaturas de programacion Full Stack, Python, PHP Laravel y Excel con doble certificacion. La comunidad tech mas activa de Argentina y LATAM.',
    images: ['/images/logo-depc-cuadrado.jpg'],
    creator: '@academiadepc',
    site: '@academiadepc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://academia.depcsuite.com',
    languages: {
      'es-AR': 'https://academia.depcsuite.com',
      'es-CO': 'https://academia.depcsuite.com',
      'es-MX': 'https://academia.depcsuite.com',
      'es-CL': 'https://academia.depcsuite.com',
      'es-PE': 'https://academia.depcsuite.com',
      'es': 'https://academia.depcsuite.com',
    },
  },
  category: 'education',
  other: {
    'geo.region': 'AR-C',
    'geo.placename': 'Buenos Aires',
    'geo.position': '-34.6037;-58.3816',
    'ICBM': '-34.6037, -58.3816',
    'content-language': 'es-AR',
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
    'target': 'all',
    'HandheldFriendly': 'true',
    'MobileOptimized': '320',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className={`font-sans antialiased`}>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
        <Analytics />
      </body>
    </html>
  )
}
