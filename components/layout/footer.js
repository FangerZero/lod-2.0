import Link from 'next/link';
import SocialMedia from './socialMedia';

export default function Footer() {
  const iconSize = 30;

  return (
    <footer className="border-t-2 border-accent">
        <SocialMedia />
        <div className="flex flex-col md:flex-row items-center justify-center">
            <Link className="px-5" href="/privacy-policy">Privacy Policy</Link>
            <Link className="px-5" href="/sitemap">Sitemap</Link>
            <Link className="px-5" href="/resources/contact">Contact</Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-5">
            <Link className="px-10" href="/">Legend of Dragoon Community </Link>
            <Link className="px-10" href="/community/credits">Copyright © 2022 DrewUniverse & company</Link>
            <span className="px-10">Legend of Dragoon™</span>
            <span>Copyright © Sony Interactive Entertainment, SIE Japan, ASOBI</span>
        </div>
    </footer>
  )
}
