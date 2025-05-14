
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solution from '@/components/Solution';
import Market from '@/components/Market';
import Competition from '@/components/Competition';
import Strategy from '@/components/Strategy';
import CustomerJourney from '@/components/CustomerJourney';
import MlopsJourney from '@/components/MlopsJourney';
import DataScienceJourney from '@/components/DataScienceJourney';
import FinancialModel from '@/components/FinancialModel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useRevealOnScroll } from '@/utils/animations';

const Index = () => {
  useRevealOnScroll('.reveal');

  useEffect(() => {
    // Set page title
    document.title = "Nova AI - Kubernetes-платформа для AI/ML";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Market />
        <Competition />
        <Strategy />
        <CustomerJourney />
        <MlopsJourney />
        <DataScienceJourney />
        <FinancialModel />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
