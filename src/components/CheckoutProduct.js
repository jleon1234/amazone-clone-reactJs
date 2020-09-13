import React, {useContext} from 'react'
import '../styles/CheckoutProduct.css';
import StateContext from '../context/state/StateContext';

function CheckoutProduct({id, image, title, price, rating}) {

    const {basket, removeFromBasket} = useContext(StateContext);


    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct__image" src={image}  />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title" >{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map( (_, i) => (
                        <p>&#11088;</p>
                    ) )}
                </div>
                <button onClick={() => removeFromBasket(id)} >Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
