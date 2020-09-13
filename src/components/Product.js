import React, {useContext} from 'react'
import StateContext from '../context/state/StateContext';

import '../styles/Product.css'
function Product({id, title, image, rating, price}) { 
    
    const {basket, addToBasketAction} = useContext(StateContext);

    const addToBasket = () => {
        // Create a producto Object
        let product = {
            id, 
            title,
            image,
            price,
            rating
        }
        // Add item to basket
        addToBasketAction(product)
    }

    return (
        <div className="product">
            <div className="product__info">
                <p  >{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map( (_) => (
                            <p>&#11088;</p>
                        ) )
                    }
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button 
                onClick={addToBasket}
            >Add to basket</button>

        </div>
    )
}

export default Product
