import '@/styles/globals.css'
import '@/styles/app.css'
import type { AppProps } from 'next/app'
import { outfit, manrope } from '@/fonts'
import { NavBar } from '@/components/navBar'
import Footer from '@/components/footer/Footer'
import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${outfit.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: ${outfit.style.fontFamily};
          font-weight: bold;
          line-height: normal;
        }
        .manropeFont{
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <NextTopLoader />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}