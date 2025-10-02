import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<h6>  hiii</h6>       


      <h1>My first project with react | YASHMIT LAMBA</h1>
      
     </div>
     <div>
      <MyComponent/>

     </div>
    </>
  )
}

export default App


