import React from "react";
import "./page.css";

const Home = () => {
  return (
    <main className="main">
      <section className="landing">
        <div className="landing-text">
          <h1>The Consulting,Branding & IT Mavens</h1>
          <p>
            We are the team unifying creativity and technology to re-architect
            brands We are one of the splinters of Digital India
          </p>
          <a href="#url-shorten-form" className="btn btn-lg">
            Get Started
          </a>
        </div>
        <div className="landing-image">
          <img
            src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg"
            alt="Working Illustration"
          />
        </div>
      </section>
      <section className="features" id="features">
        <div className="home-pg">
          <div className="url-shorten-feature">
            <form className="url-shorten-form" id="url-shorten-form">
              <div>
                <h3>
                  Himani Mishra, Co-Founder and CEO, Brand Radiator awarded with
                  Digital Women Award 2018
                </h3>
              </div>
            </form>
            <div className="url-shorten-results"></div>
          </div>
          <div className="more-features">
            <div className="section-header">
              <h2>Who We Are</h2>
              <p>Progressive & growth hacking methodology</p>
            </div>
            <div className="more-features-content">
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>Brand Recognition</h3>
                  <p>
                    Brand Radiator is a team of gallant and fearless design
                    technologists, providing strategic solution made with our
                    fingers on the pulse of market trends and the competitive
                    landscape.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>Detailed Records</h3>
                  <p>
                    Brand Radiator is a team of gallant and fearless design
                    technologists, providing strategic solution made with our
                    fingers on the pulse of market trends and the competitive
                    landscape.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>Fully Customizable</h3>
                  <p>
                    Brand Radiator is a team of gallant and fearless design
                    technologists, providing strategic solution made with our
                    fingers on the pulse of market trends and the competitive
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing" id="pricing">
        <div className="home-pg">
          <div className="section-header">
            <h2 style={{ color: "black" }}>Our Services</h2>
            <p>
              We handle all your cohesive marketing needs, both digital and
              traditional. From architectural design to stellar web and app
              development, with garden-fresh approach of story telling in social
              media & content marketing to technologically driven SEO, with deep
              dive data analytics for Ads plan & drive pay per click to eagles
              eye for online reputation management and all backed up with
              digital and traditional PR, we are your connection to the markets
              of the globe
            </p>
            <br />
            <a href="#" className="btn btn-lg">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
