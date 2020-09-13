const stateReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
           return{
               ...state,
               basket: [...state.basket, action.payload]
           }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex( basketItem => basketItem.id === action.payload )
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Can´t remove product (id: ${action.payload}) as its not in basket `);
            }
            return {
                ...state,
                basket: newBasket
            }
            break;
        default:
            return state;
    }
}

export default stateReducer;