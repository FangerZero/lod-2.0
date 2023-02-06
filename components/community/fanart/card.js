import Image from 'next/image'
import Link from 'next/link'
import noImage from '../../../public/images/noImage.webp'

export default function FanartCard() {
  return (
      <div className="ml-3">
        <div>Author</div>
        <div><Image src={noImage} width="100" height="100" className='w-full' alt="FanArt Image"/></div>
        <div>Tags</div>
      </div>
  )
}
