import React from 'react'
import HomeCarousel from '../components/HomeSlider/HomeSlider';
import Hero from '../components/main-hero/mainHero';
import SliderHomeData from '../components/HomeSlider/SliderHomeData';

const Home = () => (

  <>
    <section className="content">
      < HomeCarousel slidHomeData ={SliderHomeData} />
      <Hero />
    </section>
  </>
  
);

export default Home