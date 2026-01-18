import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import ServicesPage from "./Pages/ServicesPage";
import ServiceDetail from "./Pages/ServiceDetail";
import SignUp from "./Pages/SignUp";
import UserDashboard from "./Pages/UserDashboard";
import Login from "./Pages/Login";
import MainForm from "./Pages/MainForm";
import ConsultationForm from "./Pages/ConsultationForm";
import PaymentPage from "./Pages/PaymentPage";
import RouteOptimizer from "./Pages/RouteOptimizer";
import Events from "./Pages/EventsPage";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Report from "./Pages/Report";
import Contact from "./Pages/Contact";
import Articles from "./Pages/Articles";
import EventRegistration from "./Pages/EventRegistration";
import AILogisticsAssistant from "./Pages/AiLogisticsAssistant";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header visible on all pages */}
        <Header />
        <Navbar />
        {/* Main content grows to fill screen */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/report" element={<Report />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/events" element={<Events/>} />
            <Route path="/events/register/:eventId" element={<EventRegistration />} />
            <Route path="/route-optimizer" element={<RouteOptimizer />} />
            <Route path="/ai/chatbot" element={<AILogisticsAssistant />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainform" element={<MainForm />} />
            <Route path="/consultation" element={<ConsultationForm />} />
              <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
