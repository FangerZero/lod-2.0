import '../styles/tailwind.css'
import Footer from '../components/layout/footer'
import Banner from '../components/layout/banner'
import Navigation from '../components/layout/navigation'
import { useEffect } from 'react'
import { getFromStorage } from '../components/util/localstorage'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    return document.documentElement.setAttribute('data-theme', getFromStorage('data-theme'));
  }, [])
  
  return (
    <>
      <Banner />
      <Navigation />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
