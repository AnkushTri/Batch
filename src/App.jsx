// import { useState } from 'react'
import Cards from './components/Cards'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Chart from './components/Chart'
// import MyPieChart from './components/PieChart'

const App =()=> {


  return (
    <>
     {/* <Cards/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards/>} />
        {/* <Route path="/chart" element={<Chart/>} /> */}
        {/* <Route path="/pie" element={<MyPieChart/>} /> */}
        {/* <Route path="/:id" element={<Card/>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
