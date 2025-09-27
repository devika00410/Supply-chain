import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import ServicesPage from "./Pages/ServicesPage";
import ServiceDetail from "./Pages/ServiceDetail"; // Make sure the file name matches
import MainForm from "./Pages/MainForm";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header visible on all pages */}
        <Header />

        {/* Main content grows to fill screen */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/mainform" element={<MainForm />} />
          </Routes>
        </div>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
