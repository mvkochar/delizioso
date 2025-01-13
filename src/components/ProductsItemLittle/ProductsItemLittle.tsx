import React from 'react'
import Rating from '@mui/material/Rating';
import classes from './ProductsItemLittle.module.css'

type ProductsItemLittleProps = {
    id: number
    image: string
    title: string
    rating: number
    description: string
    price: string
}

const ProductsItemLittle = ({ id, image, title, rating, description, price }: ProductsItemLittleProps) => {
    return (
        <div className={classes.products_item}>
            <div><img src={image} alt="product" width={174} /></div>
            <h3 className={classes.products_item_title}>{title}</h3>
            <Rating name="read-only" value={rating} readOnly style={{ margin: "2px auto 0" }} />
            <p className={classes.products_item_desc}>{description}</p>
            <div className={classes.products_item_bottom}>
                <div className={classes.products_item_price}>&#36;{price}</div>
                <a href="" className={classes.products_item_order}>Order now</a>
            </div>
        </div>
    )
}

export default ProductsItemLittle