import React, {useContext} from 'react'
import Subtotal from './Subtotal';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import '../styles/Checkout.css'
import StateContext from '../context/state/StateContext';

function Checkout() {
    const {basket} = useContext(StateContext);
    return (
        <>
            <Header /> 
            <div className="checkout">
                <div className="checkout__left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Toys_Internet/XCM_Manual_1231847_1223962_US_us_kgg_q3_tgs_back_to_main_revision_us_es_3183156_1500x120_es_US.jpg" alt="" className="checkout__ad"/>
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* basket item */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout
