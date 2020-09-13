import React from 'react'
import Header from './Header';
import Product from './Product';
import '../styles/Home.css'
function HomePage() {
    return (
        <>
            <Header /> 
            <div className="home">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image"/>

                <div className="home__row">
                    <Product 
                        id="1"
                        title="adidas Men's Ultraboost 20 Sneaker"
                        image="https://m.media-amazon.com/images/I/71+WffJLY1L._AC_UL320_.jpg"
                        rating={5}
                        price={120.00}
                    />
                    <Product 
                        id="2"
                        title="adidas Women's Adilette Comfort Slide Sandal"
                        image="https://m.media-amazon.com/images/I/61Ktn5qtprL._AC_UL320_.jpg"
                        rating={4}
                        price={28.00}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="adidas Unisex Santiago Insulated Lunch Bag"
                        image="https://m.media-amazon.com/images/I/91dYNyXRjTL._AC_UL320_.jpg"
                        rating={5}
                        price={14.00}
                    />
                    <Product 
                        id="4"
                        title='Apple MNYF2LL/A 12"MacBook Laptop - Space Gray (Retina Display, 1.2GHz Intel Core m3 Dual Core Processor'
                        image="https://m.media-amazon.com/images/I/51gxEK37AuL._AC_UL320_.jpg"
                        rating={5}
                        price={1200.00}
                    />
                    <Product 
                        id="5"
                        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                        image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US218_.jpg"
                        rating={3}
                        price={349.50}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="6"
                        title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor,Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL._AC_US160_.jpg"
                        rating={5}
                        price={112.99}
                    />
                </div>
                
            </div>
            

        </>
    )
}

export default HomePage
