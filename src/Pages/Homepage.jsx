import React from 'react'
import Frontpage from '../HomeComponents/Frontpage'
import Header from '../HomeComponents/Header'
import Solve from '../HomeComponents/Solve'
import Overview from '../HomeComponents/Overview'
import TestimonialSection from '../HomeComponents/TestimonialSection'
import About from '../HomeComponents/About'
import ValueProposition from '../HomeComponents/ValueProposition'
import QuoteCTA from '../HomeComponents/QuoteCTA'

function Homepage() {
  return (
    <div>
        <Header/>
        <Frontpage/>
        <ValueProposition/>
        <Solve/>
        <Overview/>
         <About/>
        <TestimonialSection/>
       <QuoteCTA/>
    </div>
  )
}

export default Homepage