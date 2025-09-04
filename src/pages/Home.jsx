import React from 'react';
import Slider from '../components/Slider';
import About from '../components/About';
import Production from '../components/Production';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Production />
      <Contact />
    </>
  );
};

export default Home;