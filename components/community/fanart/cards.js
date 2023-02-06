import FanartCard from './card'
import Link from 'next/link'

export default function FanartCards(props) {
  return (
    <>
        <Link href="/community/fanart/SLUG" className={props.style}>
          <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="/community/fanart/SLUG" className={props.style}>
        <FanartCard />
        </Link>
    </>
  )
}
