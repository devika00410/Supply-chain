import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import ServicesPage from "./Pages/ServicesPage";
import ServiceDetail from "./Pages/ServiceDetail";
import SignUp from "./Pages/SignUp";
import UserDashboard from "./Pages/UserDashboard"; // Make sure the file name matches
import Login from "./Pages/Login";
import MainForm from "./Pages/MainForm";
import ConsultationForm from "./Pages/ConsultationForm";
import PaymentPage from "./Pages/PaymentPage";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Report from "./Pages/Report";
import Contact from "./Pages/Contact";
import Articles from "./Pages/Articles";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainform" element={<MainForm />} />
            <Route path="/consultation" element={<ConsultationForm />} />
              <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
