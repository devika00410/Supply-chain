import React from 'react'
import Frontpage from '../HomeComponents/Frontpage'
import Solve from '../HomeComponents/Solve'
import Overview from '../HomeComponents/Overview'
import TestimonialSection from '../HomeComponents/TestimonialSection'
import About from '../HomeComponents/About'
import ValueProposition from '../HomeComponents/ValueProposition'
import QuoteCTA from '../HomeComponents/QuoteCTA'
import EventsSection from '../HomeComponents/Events'
import AIChatbotAdvanced from '../components/AIChatbotAdvanced' 

function Homepage() {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <Frontpage />
      <ValueProposition />
      <EventsSection />
      <Solve />
      <Overview />
      <About />
      <TestimonialSection />
      <QuoteCTA />

      {/* Floating AI Chatbot - Always available */}
      <AIChatbotAdvanced />
    </div>
  )
}

export default Homepage