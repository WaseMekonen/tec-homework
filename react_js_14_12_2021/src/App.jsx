import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Name from './components/Name'
import ThreeCounters from './components/ThreeCounters'
import VactionList from './components/VacationList'
import YourName from './components/YourName'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h2>Home Work 14-12-21</h2>
      <hr />
      <YourName/>
      <hr />
      <Name name={"Michael"}/>
      <hr />
      <ThreeCounters/>
      <hr />
      <Login/> */}
      <hr />
      <VactionList/>
    </div>
  )
}

export default App
