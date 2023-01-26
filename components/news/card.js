import Image from 'next/image'

export default function NewsCard() {
  return (
    <div className='md:card md:w-full flex'>
      <Image src="" width="100" height="100"/>
      <div className="ml-3">
        <div>Title</div>
        <div>Date</div>
        <div>Content</div>
      </div>
    </div>
  )
}
