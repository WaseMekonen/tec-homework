import { useState } from 'react'
import ChooseEven from '../ChooseEven/ChooseEven'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Choosen Even:</h1>
      <ChooseEven/>
    </div>
  )
}

export default App
