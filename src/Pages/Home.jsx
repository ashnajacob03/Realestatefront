import React from 'react';
import "../Pages/Style.css";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar/>
      <header className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Discover premium properties that fit your lifestyle</p>
        <div className="search-bar">
          <input type="text" placeholder="Search by city, address, or ZIP code"/>
          <button>Search</button>
        </div>
      </header>
      <section className="properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
          <div className="property">
            <img src="luxury-villa.jpg" alt="Luxury Villa"/>
            <h3>Luxury Villa</h3>
            <p>$1,200,000</p>
          </div>
          <div className="property">
            <img src="modern-apartment.jpg" alt="Modern Apartment"/>
            <h3>Modern Apartment</h3>
            <p>$850,000</p>
          </div>
          <div className="property">
            <img src="cozy-bungalow.jpg" alt="Cozy Bungalow"/>
            <h3>Cozy Bungalow</h3>
            <p>$650,000</p>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>🏡 Handpicked Listings</h3>
            <p>We offer the best selection of properties that match your needs.</p>
          </div>
          <div className="feature">
            <h3>📈 Market Insights</h3>
            <p>Get the latest trends and property price insights to make informed decisions.</p>
          </div>
          <div className="feature">
            <h3>🤝 Trusted Agents</h3>
            <p>Work with experienced professionals who prioritize your satisfaction.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>“The best real estate service I have ever experienced. Highly recommended!”</p>
            <h4>- Emily Johnson</h4>
          </div>
          <div className="testimonial">
            <p>“Smooth process from start to finish. I found my dream home within weeks.”</p>
            <h4>- Michael Smith</h4>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Find Your Perfect Home?</h2>
        <p>Contact us today and let’s start your journey toward homeownership!</p>
        <button>Get Started</button>
      </section>
      
    </div>
  );
}

export default Home;
