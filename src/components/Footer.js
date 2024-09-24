import React from 'react';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Cloud Template</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled mb-0">
                <li className="ftco-animate">
                  <a href="#"><span className="fa fa-twitter"></span></a>
                </li>
                <li className="ftco-animate">
                  <a href="#"><span className="fa fa-facebook"></span></a>
                </li>
                <li className="ftco-animate">
                  <a href="#"><span className="fa fa-instagram"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Useful Links</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Company</a></li>
                <li><a href="#" className="py-2 d-block">Pricing</a></li>
                <li><a href="#" className="py-2 d-block">Leadership</a></li>
                <li><a href="#" className="py-2 d-block">Blog</a></li>
                <li><a href="#" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Navigational</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Join Us</a></li>
                <li><a href="#" className="py-2 d-block">Blog</a></li>
                <li><a href="#" className="py-2 d-block">Privacy &amp; Policy</a></li>
                <li><a href="#" className="py-2 d-block">Terms &amp; Condition</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Office</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="mr-3 fa fa-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="mr-3 fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span className="mr-3 fa fa-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with 
              <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
