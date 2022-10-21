import React from 'react'
import classes from '../reviwes/review.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
const Review = () => (

<div id="reviews-section" className={classes.reviwe}>
            <h3 className="reviwe-title"><span className={classes.reviwe__title__namber}>124</span> Reviews</h3>
            <div className={classes.reviwe__main}>
                <ul className={classes.stars__list}>
                    <li><FontAwesomeIcon className={classes.ri__star__fill} icon={faStar} /></li> 
                    <li><FontAwesomeIcon className={classes.ri__star__fill} icon={faStar} /></li> 
                    <li><FontAwesomeIcon className={classes.ri__star__fill} icon={faStar} /></li> 
                    <li><FontAwesomeIcon icon={faStarHalfStroke} className={classes.ri__star__fill}/></li> 
                    <li className={classes.review__total}>4.9</li>
                </ul>
            <span className={classes.bar__ver__left}></span>
                <Link className={classes.nav__list__description__link} to="/log-in">
                <h3 className={classes.review__login}> Log-in To Review</h3>
                </Link>  
            <span className={classes.bar__ver__right}></span>
        
        </div>

</div>
);
export default Review;