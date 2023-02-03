import Header from '../../../components/layout/header'
import FanartCards from '../../../components/community/fanart/cards'

export default function Fanart() {
  return (
    <>
      <Header title="Fanart" description="description of home page" />
      <div className="md:justify-center flex flex-row flex-wrap">
        <FanartCards style="md:w-1/3 m-2"/>
      </div>
    </>
  );    
}