import Header from '../components/layout/header';
import Modal from '../components/styled/modal';
import { useState } from 'react'

export default function StyleTest() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header title="Test Page" description="description of home page" />
      <div className="card">
        Blah blah blah 
      </div>
      <div className="btn" onClick={() => setModal(!modal)}>
        I open a modal window
      </div>
      <Modal title="I am a Title" toggleModal={setModal} modal={modal}>
        Testing the children Props
      </Modal>
    </>
  )
}