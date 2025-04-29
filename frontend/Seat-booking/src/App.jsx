import { useState } from 'react'
import './App.css'
import Coach from './Components/Coach'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Coach/>
    </>
  )
}

export default App
