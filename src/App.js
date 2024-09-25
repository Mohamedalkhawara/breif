import React from 'react';
import './App.css';
import Footer from './components/Footer';
import './styles/css/style.css';
import './styles/css/animate.css';
import './styles/scss/style.scss';
import Banner from './components/Banner';
import PricingCard from './components/PricingCard';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
    <>
      <Banner />
      
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

      <Footer />
    </>
  );
}

export default App;
