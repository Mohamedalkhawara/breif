import React from 'react';
import './App.css';
import Footer from './components/Footer';
import './styles/css/style.css';
import './styles/css/animate.css';
import './styles/scss/style.scss';
import Banner from './components/Banner';
import PricingCard from './components/PricingCard';
import Home2 from './Home2';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingSection from './components/PricingSection';

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
      <PricingSection/>
      <Footer/>

    </>
  );
}

export default App;
