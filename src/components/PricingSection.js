import React, { useEffect, useState, useRef } from 'react';

// PricingCard component to handle individual cards
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

// PricingSection component to handle the entire section
const PricingSection = () => {
  const pricingPlans = [
    {
      planName: 'Basic Plan',
      price: '0',
      period: '/mo',
      excerpt: '100% free. Forever',
      features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages', 'All features'],
      buttonText: 'Choose Plan',
    },
    {
      planName: 'Advanced Plan',
      price: '19',
      period: '/mo',
      excerpt: 'All features are included',
      features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages', 'All features'],
      buttonText: 'Choose Plan',
    },
    {
      planName: 'Expert Plan',
      price: '49',
      period: '/mo',
      excerpt: 'All features are included',
      features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages', 'All features'],
      buttonText: 'Choose Plan',
    },
    {
      planName: 'Pro Plan',
      price: '99',
      period: '/mo',
      excerpt: 'All features are included',
      features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages', 'All features'],
      buttonText: 'Choose Plan',
    },
  ];

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section">
            <h2 className="mb-4">Our Best Pricing</h2>
          </div>
        </div>
        <div className="row d-flex">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              period={plan.period}
              excerpt={plan.excerpt}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
