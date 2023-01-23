import Link from 'next/link';
import Image from 'next/image';
import spoitfy from '../../public/svgs/spotify.svg';
import twitter from '../../public/svgs/twitter.svg';
import youtube from '../../public/svgs/youtube.svg';
import reddit from '../../public/svgs/reddit.svg';
import instagram from '../../public/svgs/instagram.svg';
import discord from '../../public/svgs/discord.svg';
import feed from '../../public/svgs/feed.svg';

export default function SocialMedia() {
  const iconSize = 30;

  return (
    <div className="mt-5 md:mt-0 flex flex-row items-center justify-center">
        <Link className="m-2 md:m-5" href="https://open.spotify.com/show/21e5K65NUfH3c9QXAwjYI3">
            <Image src={spoitfy} alt="Spotify logo linked to Spotify" width={iconSize} height={iconSize}/>
        </Link>
        <Link className="m-2 md:m-5" href="https://twitter.com/lod_global">
            <Image src={twitter} alt="Twitter logo linked to Twitter" width={iconSize} height={iconSize}/>
        </Link>
        <Link className="m-2 md:m-5" href="https://www.youtube.com/channel/UC7LuPZPTRxCjr3uHG0qCiXg/about">
            <Image src={youtube} alt="Youtube logo linked to Youtube" width={iconSize} height={iconSize}/>
        </Link>
        <Link className="m-2 md:m-5" href="https://www.reddit.com/r/legendofdragoon/">
            <Image src={reddit} alt="Reddit logo linked to Reddit" width={iconSize} height={iconSize}/>
        </Link>
        <Link className="m-2 md:m-5" href="https://www.instagram.com/lod_global/">
            <Image src={instagram} alt="Instagram logo linked to Instagram" width={iconSize} height={iconSize}/>
        </Link>
        <Link className="m-2 md:m-5" href="https://discord.gg/rQWXgK5">
            <Image src={discord} alt="Discord logo linked to Discord" width={iconSize} height="auto" />
        </Link>
        <Link className="m-2 md:m-5" href="https://legendofdragoon.org/feed/">
            <Image src={feed} alt="Feed logo linked to Feed" width={iconSize} height={iconSize}/>
        </Link>
    </div>
  )
}
