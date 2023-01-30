import Header from '../../components/layout/header'

export default function Miscelaneous() {
  return (
    <>
      <Header title="Miscelaneous" description="Facts Page" />
      <div className="md:justify-center flex flex-row flex-wrap">
        <div className="py-2 px-4 border">Miscelaneous Facts</div>
        <div className="py-2 px-4">Promos</div>
        <div className="py-2 px-4">Merchandise</div>
      </div>
    </>
  )
}
