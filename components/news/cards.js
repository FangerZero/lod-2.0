import NewsCard from './card'
import Link from 'next/link'
// going to get data here and loop through it, send to NewsCard

export default function NewsCards(props) {
  return (
    <>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
      
    <Link className={props.style} href="/news/SLUG">
      <NewsCard />
    </Link>
    </>
  )
}
