import Header from '../components/layout/header'
import NewsCards from '../components/news/cards'

export default function Home() {
  return (
    <>
      <Header title="Home" description="description of home page" />
      <div className="md:mx-40 md:mt-16 flex flex-row">

        {/* News Cards */}
        <div className="md:w-2/3 md:mr-5">
          <NewsCards style="md:card md:w-full flex"/>
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
