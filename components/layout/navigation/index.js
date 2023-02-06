import Link from 'next/link'
import Account from './account'
import Mobile from './mobile'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuView, setMobileMenuView] = useState(false);
  const closed = "z-40 block hamburger focus:outline-none";
  const opened = "z-40 block hamburger focus:outline-none open";
  const showMobileMenu = () => {
    console.log(mobileMenuView);
    setMobileMenuView(!mobileMenuView);
  }
  return (
    <nav className="sticky top-0 bg-secondary z-nav">
      <div className="hidden md:flex md:flex-row items-center justify-center">
        <Link className="nav-style" href="/" data-cy="nav-home">Home</Link>
        <Link className="nav-style" href="/news" data-cy="nav-news">News</Link>
      
        <div className="group">
          <div className="nav-style" data-cy="nav-game">Game</div>
          <div className="menu-dropdown-content" data-cy="nav-game-dd">
            <Link className="nav-style" href="/game/characters" data-cy="nav-characters">Characters</Link>
            <Link className="nav-style" href="/game/map" data-cy="nav-map">Map</Link>
            <Link className="nav-style" href="/game/timeline" data-cy="nav-timeline">Timeline</Link>
            <Link className="nav-style" href="/game/miscelaneous" data-cy="nav-miscelaneous">Miscelaneous</Link>
          </div>
        </div>

        <div className="group">
          <div className="nav-style">Community</div>
          <div className="menu-dropdown-content">
            <Link className="nav-style" href="/community/petition" data-cy="nav-petition">Petition</Link>
            <Link className="nav-style" href="/community/projects" data-cy="nav-projects">Projects</Link>
            <Link className="nav-style" href="/community/fanart" data-cy="nav-fanart">Fanart</Link>
            <Link className="nav-style" href="https://legendofdragoon.org/forum/" data-cy="nav-forum">Forum</Link>
            <Link className="nav-style" href="/community/speedruns" data-cy="nav-speedruns">Speedruns</Link>
            <Link className="nav-style" href="/community/credits" data-cy="nav-credits">Credits</Link>
          </div>
        </div>
        
        <div className="group">
          <div className="nav-style">Resources</div>
          <div className="menu-dropdown-content">
            <Link className="nav-style" href="/resources/downloads" data-cy="nav-downloads">Downloads</Link>
            <Link className="nav-style" href="/resources/guides" data-cy="nav-guides">Guides</Link>
            <Link className="nav-style" href="https://legendofdragoon.org/wiki/index.php/Main_Page" data-cy="nav-wiki">Wiki</Link>
            <Link className="nav-style" href="/resources/damage-calculator" data-cy="nav-dmgCalc">Damage Calculator</Link>
            <Link className="nav-style" href="/resources/contact" data-cy="nav-contact">Contact</Link>
            <Link className="nav-style" href="/resources/archives" data-cy="nav-archives">Archives</Link>
          </div>
        </div>
        <Account />
      </div>
      <div className="md:hidden p-2">
        <button  id="nav-btn"  type="button" className={mobileMenuView ? opened : closed} onClick={showMobileMenu}>
          <span className="hamburger-top bg-primary"></span>
          <span className="hamburger-middle bg-primary"></span>
          <span className="hamburger-bottom bg-primary"></span>
        </button>
      </div>
      {mobileMenuView && 
        <Mobile />
      }
    </nav>
      
  )
}
