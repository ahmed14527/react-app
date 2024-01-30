import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Bin',
    age: 22,
    address: {
      city: 'itay',
      state: 'cairo',
      country: 'EG'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >WITH BIN SHAWKY</h1>
      <Card username="ahmed" myArr={newArr} />
      <Card username='Bin shawky' post='Staff Engg.' />
      <Card />
    </>
  )
}

export default App
