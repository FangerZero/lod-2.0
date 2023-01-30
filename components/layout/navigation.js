import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-secondary hidden md:flex md:flex-row items-center justify-center z-nav">
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
          <Link className="nav-style" href="/community/fan-art" data-cy="nav-fanart">Fan Art</Link>
          <Link className="nav-style" href="/community/forum" data-cy="nav-forum">Forum</Link>
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
    </nav>
  )
}
