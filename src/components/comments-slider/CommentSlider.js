import React from 'react'
import classes from "../comments-slider/comments-slider.module.scss"
import { Link } from 'react-router-dom';
import ReviewSliderData from './SliderData';

function CommentSlider() {
  const reviewdata  = ReviewSliderData

  return (
    <div className={classes.testimonials}>
    <h3 className={classes.testimonials__title}>Testimonials</h3>
      <div className={classes.main__testimonials}>
      {reviewdata.map((review) => (

        <div className={classes.main__testimonials__card}>

            <div className={classes.main__testimonials__card__holder}>
            <img className={classes.main__testimonials__card__img} src={review.img} alt="pesrson_image" />
            </div>
            <div className={classes.main__testimonials__card__cont}>
            <h3 className={classes.main__testimonials__card__name}>{review.name}</h3>
            <p className={classes.main__testimonials__card__copy}>{ review.reviews}</p>
            </div>
        </div>
    
            
            ))}
         

<div className={classes.testimonials__nav}>
    <button className={classes.testimonials__nav__angle__left}><img className={classes.testimonials__nav__icon__left} src="./assets/icons/icon-previous.svg" alt=" persons_image"/>
    </button>
    <button className={classes.testimonials__nav__angle__right}><img className={classes.testimonials__nav__icon__right }src="./assets/icons/icon-next.svg" alt="persons_image"/>
    </button>
</div>
    <Link to="/collection">
        <button className={classes.testimonials__btn}> Review Our Products Here!</button>
    </Link>
</div > 

</div>
  )
}

export default CommentSlider