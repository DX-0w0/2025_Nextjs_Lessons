import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function closeModalHandler() {
    setModalIsVisible(false)
  }

  function openModalHandler() {
    setModalIsVisible(true)
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={closeModalHandler} />
      </main>
    </>
  )
}

export default App
