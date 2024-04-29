import EventList from '@/components/landing/EventList';
import Header from '@/components/landing/Header';
import React from 'react';

const HomePage = () => {
  return (
    <section className="container">
      <Header/>
      <EventList/>
    </section>
  );
};

export default HomePage;