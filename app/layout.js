import './globals.css'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'

export const metadata = {
  title: 'Elektrisch Zeilen Hub — ombouw diesel naar elektrisch (30–38 ft)',
  description: 'Kennisbank, producten en handleidingen voor elektrisch maken van zeiljachten (30–38 ft).',
  openGraph: {
    title: 'Elektrisch Zeilen Hub',
    description: 'Alles over de ombouw van diesel naar elektrisch (30–38 ft zeiljachten).',
    url: 'https://jouwdomein.nl',
    siteName: 'Elektrisch Zeilen Hub',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: 'https://jouwdomein.nl/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Elektrisch Zeilen Hub',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      {/*
        Use a minimal and modern base styling for the entire document. We set a light gray
        background for light mode and a very dark gray for dark mode. The font is set to
        the sans-serif family via the `font-sans` utility on the body. We also make the
        body a flex container with a minimum height of the screen so that the footer
        sticks to the bottom when there is little content.
      */}
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Wrap the layout contents in a flex container so the main section grows to fill
              the available space, pushing the footer to the bottom. */}
          <div className="flex flex-col flex-grow">
            <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
              <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="font-bold text-2xl">
                  <Link href="/">Elektrisch Zeilen Hub</Link>
                </h1>
                <ul className="flex space-x-6 text-sm font-medium">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/wiki/routekaart" className="hover:underline">Kennisbank</Link></li>
                  <li><Link href="/producten" className="hover:underline">Producten</Link></li>
                  <li><Link href="/downloads" className="hover:underline">Downloads</Link></li>
                  <li><Link href="/cases" className="hover:underline">Cases 30–38 ft</Link></li>
                  <li><Link href="/over" className="hover:underline">Over</Link></li>
                </ul>
              </nav>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80">
              <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
                <div>© {new Date().getFullYear()} Elektrisch Zeilen Hub. Alle rechten voorbehouden.</div>
                <div className="flex space-x-4">
                  <a href="mailto:info@elektrisch-zeilen-hub.nl" className="hover:underline">Contact</a>
                  <a href="https://jouwdomein.nl" className="hover:underline">Website</a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}