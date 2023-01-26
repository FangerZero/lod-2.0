import NewsCard from './card'
import Link from 'next/link';

export default function NewsCards(props) {
  return (
    <>
        <Link href="" className={props.style}>
            <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
        <Link href="" className={props.style}>
        <NewsCard />
        </Link>
    </>
  )
}
