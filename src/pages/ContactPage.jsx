import React, { useState, useEffect } from "react";
import ContactUs from "./ContactUs";

function ContactPage({ formSubmissions, onFormSubmit }) {
  const [posts, setPosts] = useState([]);

  return (
    <div className="contact-main-card">
      <h1 className="page-heading">Contact Us</h1>
      <ContactUs onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default ContactPage;
