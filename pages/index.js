import Header from '../components/layout/header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header title="Home Page" description="description of home page" />
      <div className="md:mx-40 md:mt-16 flex flex-row">
        
        {/* News Cards */}
        <div className="md:w-2/3 md:mr-5">
          {/* News Card */}
          <div className='md:card md:w-full flex'>
            <Image src="" width="100" height="100"/>
            <div className="md:ml-3">
              <div>Title</div>
              <div>Date</div>
              <div>Content</div>
            </div>
          </div>
        </div>
        {/* Widget Cards */}
        <div className="hidden md:block w-1/3">
          <div className='card w-full'>
            Content
          </div>
        </div>
      </div>
    </>
  )
}
