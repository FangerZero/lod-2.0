import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-secondary hidden md:flex md:flex-row items-center justify-center z-nav">
      <Link className="nav-style" href="/">Home</Link>
      <Link className="nav-style" href="/news">News</Link>
    
      <div className="group">
        <div className="nav-style">Game</div>
        <div className="menu-dropdown-content">
          <Link className="nav-style" href="/game/characters">Characters</Link>
          <Link className="nav-style" href="/game/map">Map</Link>
          <Link className="nav-style" href="/game/timeline">Timeline</Link>
          <Link className="nav-style" href="/game/misc-facts">Miscelaneous Facts</Link>
        </div>
      </div>

      <div className="group">
        <div className="nav-style">Community</div>
        <div className="menu-dropdown-content">
          <Link className="nav-style" href="/community/petition">Petition</Link>
          <Link className="nav-style" href="/community/projects">Projects</Link>
          <Link className="nav-style" href="/community/fan-art">Fan Art</Link>
          <Link className="nav-style" href="/community/forum">Forum</Link>
          <Link className="nav-style" href="/community/speedruns">Speedruns</Link>
          <Link className="nav-style" href="/community/credits">Credits</Link>
        </div>
      </div>
      
      <div className="group">
        <div className="nav-style">Resources</div>
        <div className="menu-dropdown-content">
          <Link className="nav-style" href="/resources/downloads">Downloads</Link>
          <Link className="nav-style" href="/resources/guides">Guides</Link>
          <Link className="nav-style" href="https://legendofdragoon.org/wiki/index.php/Main_Page">Wiki</Link>
          <Link className="nav-style" href="/resources/damage-calculator">Damage Calculator</Link>
          <Link className="nav-style" href="/resources/contact">Contact</Link>
          <Link className="nav-style" href="/resources/archives">Archives</Link>
        </div>
      </div>
    </nav>
  )
}
