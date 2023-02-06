import Link from 'next/link'
import Account from './account';
import { useState } from 'react'

export default function Mobile() {
    const [game, setGame] = useState(false);
    const [community, setCommunity] = useState(false);
    const [resources, setResources] = useState(false);

  return (
    <div className="absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3">
        <Link className="mobile-nav-style w-full" href="/" data-cy="mobile-nav-home">Home</Link>
        <Link className="mobile-nav-style w-full" href="/news" data-cy="mobile-nav-news">News</Link>
        
        <div className="group">
            <button className="mobile-nav-style" onClick={(game) => setGame(!game)} data-cy="mobile-nav-game">Game</button>
            {game && 
                <div className="menu-dropdown-content" data-cy="mobile-nav-game-dd">
                    <Link className="mobile-nav-style" href="/game/characters" data-cy="mobile-nav-characters">Characters</Link>
                    <Link className="mobile-nav-style" href="/game/map" data-cy="mobile-nav-map">Map</Link>
                    <Link className="mobile-nav-style" href="/game/timeline" data-cy="mobile-nav-timeline">Timeline</Link>
                    <Link className="mobile-nav-style" href="/game/miscelaneous" data-cy="mobile-nav-miscelaneous">Miscelaneous</Link>
                </div>
            }
        </div>

        <div className="group">
            <div className="mobile-nav-style" onClick={() => setCommunity(!community)}>Community</div>
            {community &&
                <div className="menu-dropdown-content">
                    <Link className="mobile-nav-style" href="/community/petition" data-cy="mobile-nav-petition">Petition</Link>
                    <Link className="mobile-nav-style" href="/community/projects" data-cy="mobile-nav-projects">Projects</Link>
                    <Link className="mobile-nav-style" href="/community/fanart" data-cy="mobile-nav-fanart">Fanart</Link>
                    <Link className="mobile-nav-style" href="https://legendofdragoon.org/forum/" data-cy="mobile-nav-forum">Forum</Link>
                    <Link className="mobile-nav-style" href="/community/speedruns" data-cy="mobile-nav-speedruns">Speedruns</Link>
                    <Link className="mobile-nav-style" href="/community/credits" data-cy="mobile-nav-credits">Credits</Link>
                </div>
            }
        </div>
        
        <div className="group">
            <div className="mobile-nav-style" onClick={() => setResources(!resources)}>Resources</div>
            {resources &&
                <div className="menu-dropdown-content">
                    <Link className="mobile-nav-style" href="/resources/downloads" data-cy="mobile-nav-downloads">Downloads</Link>
                    <Link className="mobile-nav-style" href="/resources/guides" data-cy="mobile-nav-guides">Guides</Link>
                    <Link className="mobile-nav-style" href="https://legendofdragoon.org/wiki/index.php/Main_Page" data-cy="mobile-nav-wiki">Wiki</Link>
                    <Link className="mobile-nav-style" href="/resources/damage-calculator" data-cy="mobile-nav-dmgCalc">Damage Calculator</Link>
                    <Link className="mobile-nav-style" href="/resources/contact" data-cy="mobile-nav-contact">Contact</Link>
                    <Link className="mobile-nav-style" href="/resources/archives" data-cy="mobile-nav-archives">Archives</Link>
                </div>
            }
        </div>
        <Account />
    </div>
      
  )
}
