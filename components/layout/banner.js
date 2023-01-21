import Image from 'next/image'
import banner from '../../public/images/banner/70_Dragoon_Dart-Rose.webp'

export default function Banner() {
  return (
    <Image src={banner} alt="Banner of Rose & Dart in dragoon form." className="w-screen"/>
  )
}
