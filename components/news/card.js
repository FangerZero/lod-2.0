import Image from 'next/image'
import noImage from '../../public/images/news/noImage.webp'

export default function NewsCard() {
  return (
    <>
      <Image src={noImage} width="100" height="100"/>
      <div className="ml-3">
        <div>Title</div>
        <div>Date</div>
        <div>Content</div>
      </div>
    </>
  )
}
