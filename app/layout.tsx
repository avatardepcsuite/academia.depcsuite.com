import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { CurrencyProvider } from '@/contexts/currency-context'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2D1B4E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://academia.depcsuite.com'),
  title: {
    default: 'Academia DePC | La comunidad tech más activa de Argentina y Latinoamérica. Certificación nacional e internacional',
    template: '%s | Academia DePC'
  },
  description: 'Academia DePC ofrece diplomaturas de programación React.js, Node.js, Web Full Stack, Python, PHP Laravel y Excel con doble certificación (nacional e internacional). Cursos 100% online con clases en vivo, webinars gratuitos, hackathones presenciales y portal de empleo exclusivo. La comunidad tech más activa de Argentina y Latinoamérica.',
  keywords: [
    'cursos de programación',
    'academia de programación',
    'diplomatura full stack',
    'curso python',
    'curso php laravel',
    'curso excel',
    'certificación programación',
    'aprender a programar',
    'bootcamp programación',
    'desarrollo web',
    'React',
    'Node.js',
    'JavaScript',
    'cursos online argentina',
    'formación tecnología',
    'comunidad tech',
    'hackathon',
    'webinars tecnología',
    'portal empleo tecnología',
    'certificación internacional programación',
    'curso react js',
    'curso node js',
    'curso django',
    'curso laravel',
    'inteligencia artificial programación',
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
    title: 'Academia DePC | La comunidad tech más activa de Argentina y Latinoamérica. Certificación nacional e internacional',
    description: 'Diplomaturas de programación Full Stack, Python, PHP Laravel y Excel con doble certificación. Clases en vivo, webinars gratuitos, hackathones y portal de empleo. La comunidad tech más activa de Argentina y LATAM.',
    images: [
      {
        url: '/images/logo-depc-cuadrado.jpg',
        width: 1200,
        height: 630,
        alt: 'Academia DePC - Cursos de Programación y Tecnología',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia DePC | Cursos de Programación con Certificación',
    description: 'Diplomaturas de programación Full Stack, Python, PHP Laravel y Excel con doble certificación. La comunidad tech más activa de Argentina y LATAM.',
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
    <html lang="es-AR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://s3.us-east-1.amazonaws.com" />
        <link rel="preconnect" href="https://6rldo3zfyk.execute-api.us-east-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://metricas-sitios.s3.us-east-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        

      </head>
      <body className="font-sans antialiased">
        <CurrencyProvider>
          {children}
          <WhatsAppButton />
        </CurrencyProvider>
        <Analytics />
        
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w1g2uve0vt");
            `
          }}
        />
        
        {/* Analytics script */}
        <Script
          src="https://metricas-sitios.s3.us-east-1.amazonaws.com/analytics.js"
          data-site-id="1"
          data-endpoint="https://6rldo3zfyk.execute-api.us-east-1.amazonaws.com/prod/collect"
          data-token-endpoint="https://6rldo3zfyk.execute-api.us-east-1.amazonaws.com/prod/token"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
