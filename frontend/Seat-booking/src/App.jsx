import { useState } from 'react'
import './App.css'
import Coach from './Components/Coach'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Coach/>}/>
      </Routes>
      

    </>
  )
}

export default App
