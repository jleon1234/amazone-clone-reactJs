import React, { useEffect, useReducer } from 'react';
import StateContext from './StateContext';
import StateReducer from './StateReducer';



const UsuarioState = ({children}) => {

    
    // State de usuarios
    const initialState = {
        basket: []
    }

 

    const [ state, dispatch ] = useReducer(StateReducer, initialState);


    const addToBasketAction = (product) => {
        dispatch({
            type:"ADD_TO_BASKET",
            payload: product
        })
    }

    
    return(
        <StateContext.Provider
            value={{
                basket: state.basket,
                addToBasketAction
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export default UsuarioState;
