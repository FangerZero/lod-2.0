import FanartCard from './card'
import Link from 'next/link'

export default function FanartCards(props) {
  return (
    <>
        <Link href="" className={props.style}>
          <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
        <Link href="" className={props.style}>
        <FanartCard />
        </Link>
    </>
  )
}
