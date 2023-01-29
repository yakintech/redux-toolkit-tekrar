import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state, action) => {

            //cartItem control
            let cartItem = state.cart.find(q => q.id == action.payload.id);

            if (cartItem == undefined) {
                let newCartItem = {
                    id: action.payload.id,
                    name: action.payload.name,
                    unitPrice: action.payload.unitPrice,
                    quantity: 1
                }

                state.cart.push(newCartItem);
            }
            else {
                cartItem.quantity = cartItem.quantity + 1;
            }
        },
        remove: (state, action) => {
            state.cart = state.cart.filter(q => q.id != action.payload.id)
        },
        empty: (state) => {
            state.cart = [];
        },
        increase: (state, action) => {
            let cartItem = state.cart.find(q => q.id == action.payload);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrease: (state, action) => {
            let cartItem = state.cart.find(q => q.id == action.payload);

            if(cartItem.quantity == 1){
                state.cart = state.cart.filter(q => q.id != action.payload);
            }
            else{
                cartItem.quantity = cartItem.quantity - 1;
            }
        }
    }
})


export const { add, remove, empty, increase, decrease } = cartSlice.actions
export default cartSlice.reducer

