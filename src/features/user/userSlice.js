import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        cart: [],
        favourite: [],
        isLoading: false,
        formType:'signup',
        showForm: false
    },
    reducers:{
        changeQuantity: (state, {payload}) =>{
            state.cart.map((item) => {
                if(item.id == payload.id)
                    item.quantity += payload.op;
                if(item.quantity < 1 ) item.quantity = 1;
            })
        },
        addItemToCart: (state, {payload}) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({id}) => id === payload.id);


            if(found){
                newCart = newCart.map((item) => {
                    return item.id === payload.id 
                    ? {...item, quantity: payload.quantity || item.quantity + 1}
                    : item;
                });
            }
            else newCart.push({...payload, quantity: 1});

            state.cart = newCart;
        },
        addItemToFavourite: (state, {payload}) => {
            let newFavourite = [...state.favourite];
            const found = state.favourite.find(({id}) => id === payload.id);

            if(!found){
                newFavourite.push(payload);
            }

            state.favourite = newFavourite;
        },

        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        },

        addUser: (state, {payload}) => {
            state.currentUser = payload;
            state.formType = 'logged';
        },
        exitUser: (state) => {
            state.currentUser = null;
            state.cart = [];
            state.formType = 'signup'
        }
        
    },
  
});

export const {addItemToCart, addItemToFavourite, toggleForm, addUser, exitUser, changeQuantity} = usersSlice.actions;

export default usersSlice.reducer;