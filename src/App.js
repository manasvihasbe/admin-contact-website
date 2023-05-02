import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import React, { useState } from "react";

function App() {
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setFormSubmissions([...formSubmissions, formData]);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route path="/about" element={<AboutUs/>}/>
          <Route
            path="/contact"
            element={<ContactPage formSubmissions={formSubmissions} onFormSubmit={handleFormSubmit} />}
          />
          
          <Route
            path="/admin"
            element={<Admin formSubmissions={formSubmissions} onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
