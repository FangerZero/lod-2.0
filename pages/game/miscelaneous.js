import Header from '../../components/layout/header'
import Merch from '../../components/game/merch'
import Misc from '../../components/game/misc'
import Promos from '../../components/game/promos'
import { useState } from 'react'

export default function Miscelaneous() {
  const [viewType, setViewType] = useState('misc');
  const commonClassName = "py-2 px-4 border border-secondary bg-secondary text-accent hover:bg-primary hover:text-secondary cursor-pointer"

  return (
    <>
      <Header title="Miscelaneous" description="Facts Page" />
      <div className="md:justify-center flex flex-row flex-wrap mt-5">
        <div className={`rounded-l ${commonClassName}`} onClick={() => setViewType('misc')}>Miscelaneous Facts</div>
        <div className={commonClassName} onClick={() => setViewType('promos')}>Promotions</div>
        <div className={`rounded-r ${commonClassName}`} onClick={() => setViewType('merch')}>Merchandise</div>
      </div>
      <div className="md:justify-center flex flex-row flex-wrap mt-5">
        {(viewType === 'merch') && <Merch />}
        {(viewType === 'misc')  && <Misc />}
        {(viewType === 'promos')  && <Promos />}
      </div>
    </>
  )
}
