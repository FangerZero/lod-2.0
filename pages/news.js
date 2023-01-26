import Header from '../components/layout/header'
import NewsCards from '../components/news/cards'

export default function News() {
  return (
    <>
      <Header title="News" description="description of home page" />
      <div className="md:justify-center flex flex-row flex-wrap">
        <NewsCards style="md:w-1/3 m-2"/>
      </div>
    </>
  );    
}