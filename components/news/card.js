import Image from 'next/image'
import Link from 'next/link'

export default function NewsCard() {
  return (
    <Link className='md:card md:w-full flex' href="/news/SLUG">
      <Image src="" width="100" height="100"/>
      <div className="ml-3">
        <div>Title</div>
        <div>Date</div>
        <div>Content</div>
      </div>
    </Link>
  )
}
