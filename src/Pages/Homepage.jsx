import React from 'react'
import Frontpage from '../HomeComponents/Frontpage'
import Header from '../HomeComponents/Header'
import Solve from '../HomeComponents/Solve'
import Overview from '../HomeComponents/Overview'

function Homepage() {
  return (
    <div>
        <Header/>
        <Frontpage/>
        <Solve/>
        <Overview/>
    </div>
  )
}

export default Homepage