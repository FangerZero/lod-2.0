import Image from 'next/image'
import Link from 'next/link'

export default function FanartCard() {
  return (
    <Link className='md:card md:w-full flex' href="/community/fanart/SLUG">
      <div className="ml-3">
        <div>Author</div>
        <div><Image src="" width="100" height="100" className='w-full'/></div>
        <div>Tags</div>
      </div>
    </Link>
  )
}
