import React, { useEffect } from 'react';
import './Banner.css';

function Banner() {
  useEffect(() => {
    const setFullHeight = () => {
      const hero = document.querySelector('.hero-wrap');
      if (hero) {
        hero.style.height = `${window.innerHeight}px`;
      }
    };

    setFullHeight(); 
    window.addEventListener('resize', setFullHeight);

    return () => {
      window.removeEventListener('resize', setFullHeight);
    };
  }, []);

  return (
    <div className="hero-wrap">
      <div className="overlay"></div>
      <div className="container-fluid px-0">
        <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-start">
          <img
            className="one-third img-fluid"
            src={`${process.env.PUBLIC_URL}/images/undraw_co-working_825n.svg`}
            alt="Co-working illustration"
          />
          <div className="one-forth d-flex align-items-center animate-section">
            <div className="text mt-5">
              <span className="subheading">Cloud Template</span>
              <h1 className="mb-3">
                <span>Cloud,</span> <span>Management,</span> <span>Template</span>
              </h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p>
                <a href="#" className="btn btn-secondary px-4 py-3">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
