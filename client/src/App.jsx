import { useState } from 'react'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'; 
import Layout from './Layout';
import HomePage from './Pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
