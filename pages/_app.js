import '../styles/tailwind.css'
import Footer from '../components/layout/footer'
import Banner from '../components/layout/banner'
import Navigation from '../components/layout/navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Navigation />
      <main className="h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
