import React from 'react'
import Frontpage from '../HomeComponents/Frontpage'
import Header from '../HomeComponents/Header'
import Solve from '../HomeComponents/Solve'

function Homepage() {
  return (
    <div>
        <Header/>
        <Frontpage/>
        <Solve/>
    </div>
  )
}

export default Homepage