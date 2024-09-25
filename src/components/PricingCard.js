import React, { useEffect, useState, useRef } from 'react';

const PricingCard = ({ planName, price, period, excerpt, features, buttonText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer to mimic waypoints
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Add animation class when the element is visible
        }
      },
      {
        root: null,
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Add animation classes based on visibility
  const animationClass = isVisible ? 'fadeInUp ftco-animated' : '';

  return (
    <div ref={cardRef} className={`col-lg-3 col-md-6 ftco-animate ${animationClass}`}>
      <div className="block-7">
        <div className="text-center">
          <h2 className="heading">{planName}</h2>
          <span className="price">
            <sup>$</sup>
            <span className="number">{price}<small className="per">/{period}</small></span>
          </span>
          <span className="excerpt d-block">{excerpt}</span>
          <h3 className="heading-2 mb-3">Enjoy All The Features</h3>

          <ul className="pricing-text mb-4">
            {features.map((feature, index) => (
              <li key={index}><strong>{feature}</strong></li>
            ))}
          </ul>
          <a href="#" className="btn btn-tertiary d-block px-3 py-3 mb-4">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
