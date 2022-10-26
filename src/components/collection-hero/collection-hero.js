import React from "react";
import classes from '../collection-hero/collection-hero.module.scss';
import { Link } from 'react-router-dom';
import Review from '../reviwes/review';
import data from '../../data/data';

import CollectionProducts from '../collections-product/collections-products';
const { products } = data;

const CollectionHero = () => (

    <> 
        <div className={classes.products}>
            <h1 className={classes.products__title}>Products</h1>
        </div>
        <div>
         {products.map((x) => {
             return (
                
                <CollectionProducts key={x.index} shortDiscription={x.shortDiscription} image={x.image } itemSize={x.itemSize} name={x.name} price={x.price} itemNumber={x.itemNumber} />
        );
      })}
    </div>
    
        <Review/>
    </>


);

export default  CollectionHero;