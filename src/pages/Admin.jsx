import React, { useState } from "react";
import ContactUs from "./ContactUs";

const Admin = ({ formSubmissions, onFormSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="page-heading">Welcome, {username}!</h1>
          <button className="button login__submit logout_button" type="submit"  onClick={handleLogout}>
          <span className="button__text">Logout</span>
          <i className="button__icon fas fa-chevron-right"></i>
        </button>
        <div  className="tableStyle">
          <table>
            <thead>
              <tr style={{background:"grey"}}>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {formSubmissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      ) : (
        <div>
           <h1 className="page-heading">Admin</h1>
          <div className="container-contact">
            <div className="screen1">
              <div className="screen__content">
                <form className="login1">
                  <div className="login__field">
                    <i className="login__icon fas fa-user"></i>
                    <input
                      className="login__input"
                      placeholder="Username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="login__field">
                    <i className="login__icon fas fa-lock"></i>
                    <input
                      className="login__input"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </div>

                  <button className="button login__submit" onClick={handleLogin}>
                    <span className="button__text">Login</span>
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
      )}
    </div>
  );
};

export default Admin;
