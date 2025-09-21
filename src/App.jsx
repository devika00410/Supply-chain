import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage/> 
     <Footer/>
    </>
  )
}

export default App
