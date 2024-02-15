// import { useState } from 'react'
import Cards from './components/Cards'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App =()=> {


  return (
    <>
     {/* <Cards/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards/>} />
        {/* <Route path="/:id" element={<Card/>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
