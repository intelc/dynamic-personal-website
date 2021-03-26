import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPosts from './Components/BlogPosts'
import Header from './Components/Header'
import ModalForm from './Components/ModalForm'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Header />
      <BlogPosts show={() => setShow(true)} />
      <ModalForm show={show} onHide={() => setShow(false)} />
    </div>
  )
}

export default App
