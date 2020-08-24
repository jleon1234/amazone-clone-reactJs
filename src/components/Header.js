import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBasket } from '@material-ui/icons';
import '../styles/Header.css';
import StateContext from '../context/state/StateContext';


function Header() {

    const {basket} = useContext(StateContext);

    return (
        <nav className="header">
            <Link to="/" >
                <img  className="header__logo"  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <Search className="header__searchIcon" />
            </div>


            <div className="header__nav">
                <Link to="/login" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne" >Hello Qazi</span>
                        <span  className="header__optionLineTwo" >Sing In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link" >
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount" >{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
