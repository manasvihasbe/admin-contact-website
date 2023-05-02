import React, { useState } from "react";

const ContactUs = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
<div >
  <div className="contact-container">
  <div >
  <div className="container-contact">
  <div className="screen">
    <div className="screen__content">
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__field">
                <i className="login__icon fas fa-user"></i>

        <input
          type="text"
           className="login__input"
           placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)} required
        />
    </div>
      <div className="login__field">
          <i className="login__icon fas fa-lock"></i>
        <input
         className="login__input" placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        </div>
     <div className="login__field">
          <i className="login__icon fas fa-user"></i>
        <textarea
         className="login__input" placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} required
        />
     </div>
       <button className="button login__submit" type="submit">
          <span className="button__text">Submit</span>
          <i className="button__icon fas fa-chevron-right"></i>
        </button> 
    </form>
    </div>
     <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4"></span>
      <span className="screen__background__shape screen__background__shape3"></span>    
      <span className="screen__background__shape screen__background__shape2"></span>
      <span className="screen__background__shape screen__background__shape1"></span>
    </div> 
     </div>
</div>
</div> 
  </div>
</div>

   
  );
};

export default ContactUs;
