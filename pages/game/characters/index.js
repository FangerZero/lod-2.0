import Header from '../../../components/layout/header'
import Heroes from '../../../components/game/characters/heroes'
import Enemies from '../../../components/game/characters/enemies'
import Extras from '../../../components/game/characters/extras'
import { useState } from 'react'

export default function Characters() {
    const [viewType, setViewType] = useState('heroes');
    const commonClassName = "py-2 px-4 border border-secondary bg-secondary text-accent hover:bg-primary hover:text-secondary cursor-pointer"

  return (
    <>
    <Header title="Characters" description="Facts Page" />
    <div className="md:justify-center flex flex-row flex-wrap mt-5">
      <div className={`rounded-l ${commonClassName}`} onClick={() => setViewType('heroes')} data-cy="heroes-btn">Heroes</div>
      <div className={commonClassName} onClick={() => setViewType('enemies')} data-cy="enemies-btn">Enemies</div>
      <div className={`rounded-r ${commonClassName}`} onClick={() => setViewType('extras')} data-cy="extras-btn">Extras</div>
    </div>
    <div className="md:justify-center flex flex-row flex-wrap mt-5">
      {(viewType === 'heroes') && <Heroes />}
      {(viewType === 'enemies')  && <Enemies />}
      {(viewType === 'extras')  && <Extras />}
    </div>
    </>
  )
}
