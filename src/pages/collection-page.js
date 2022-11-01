import React from 'react'
import SliderData from '../components/slider/SliderData';
import Carousel from '../components/slider/Slider';
import CollectionHero from '../components/collection-hero/collection-hero';
function Collection() {

  return(
  <>
    <section className='content'>
      <Carousel slidData={SliderData} />
      <CollectionHero  />
    </section>
    </>
  )

};
export default Collection; 
