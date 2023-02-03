import Header from '../../components/layout/header'
import Merch from '../../components/game/miscelaneous/merch'
import Misc from '../../components/game/miscelaneous/misc'
import Promos from '../../components/game/miscelaneous/promos'
import { useState } from 'react'

export default function Miscelaneous() {
  const [viewType, setViewType] = useState('misc');
  const commonClassName = "py-2 px-4 border border-secondary bg-secondary text-accent hover:bg-primary hover:text-secondary cursor-pointer"

  return (
    <>
      <Header title="Miscelaneous" description="Facts Page" />
      <div className="md:justify-center flex flex-row flex-wrap mt-5">
        <div className={`rounded-l ${commonClassName}`} onClick={() => setViewType('misc')} data-cy="misc-btn">Miscelaneous Facts</div>
        <div className={commonClassName} onClick={() => setViewType('promos')} data-cy="promo-btn">Promotions</div>
        <div className={`rounded-r ${commonClassName}`} onClick={() => setViewType('merch')} data-cy="merch-btn">Merchandise</div>
      </div>
      <div className="md:justify-center flex flex-row flex-wrap mt-5">
        {(viewType === 'merch') && <Merch />}
        {(viewType === 'misc')  && <Misc />}
        {(viewType === 'promos')  && <Promos />}
      </div>
    </>
  )
}
