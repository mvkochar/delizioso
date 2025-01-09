import React from 'react'
import Rating from '@mui/material/Rating';
import classes from './ProductsItem.module.css'

type ProductsItemProps = {
    id: number
    image: string
    title: string
    rating: number
    description: string
    price: string
}

const ProductsItem = ({ id, image, title, rating, description, price }: ProductsItemProps) => {
    return (
        <div className={classes.products_item}>
            <div><img src={image} alt="product" /></div>
            <h3 className={classes.products_item_title}>{title}</h3>
            <Rating name="read-only" value={rating} readOnly style={{margin: "5px auto"}} />
            <p className={classes.products_item_desc}>{description}</p>
            <div className={classes.products_item_bottom}>
                <div className={classes.products_item_price}>&#36;{price}</div>
                <a href="" className={classes.products_item_order}>Order now</a>
            </div>
        </div>
    )
}

export default ProductsItem