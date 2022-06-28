import React from "react";

const Footer = () => {
  return (
    <footer className="p-3 mb-0">
      <div className="py-3 row">
        <div className="col text-center">
          <h5 className="mt-3">
            Join the Adventure newsletter to receive our best vacation deals
          </h5>
          <p className="mt-4">You can unsubscribe at any time.</p>
          <div className="subscribe mt-4">
            <input placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pt-3 row w-75 m-auto">
        <div className="col-3 column py-4">
          <h3>About Us</h3>
          <ul className="pt-3">
            <li className="pt-2">
              <a href="#">How it works</a>
            </li>

            <li className="pt-2">
              <a href="#">Testimonials</a>
            </li>

            <li className="pt-2">
              <a href="#">Careers</a>
            </li>

            <li className="pt-2">
              <a href="#">Investor</a>
            </li>

            <li className="pt-2">
              <a href="#">Terms of service</a>
            </li>
          </ul>
        </div>
        <div className="col-3 column py-4">
          <h3>Contact Us</h3>
          <ul className="pt-3">
            <li className="pt-2">
              <a href="#">Contact</a>
            </li>

            <li className="pt-2">
              <a href="#">Support</a>
            </li>

            <li className="pt-2">
              <a href="#">Destinations</a>
            </li>

            <li className="pt-2">
              <a href="#">Sponsorships</a>
            </li>
          </ul>
        </div>
        <div className="col-3 column py-4">
          <h3>Videos</h3>
          <ul className="pt-3">
            <li className="pt-2">
              <a href="#">Submit video</a>
            </li>

            <li className="pt-2">
              <a href="#">Ambassadors</a>
            </li>

            <li className="pt-2">
              <a href="#">Agency</a>
            </li>

            <li className="pt-2">
              <a href="#">Influencer</a>
            </li>
          </ul>
        </div>
        <div className="col-3 column py-4">
          <h3>Social Media</h3>
          <ul className="pt-3">
            <li className="pt-2">
              <a href="#">Instagram</a>
            </li>

            <li className="pt-2">
              <a href="#">Facebook</a>
            </li>

            <li className="pt-2">
              <a href="#">Twitter</a>
            </li>

            <li className="pt-2">
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
