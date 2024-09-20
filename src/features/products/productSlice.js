import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import {BASE_URL} from '../../utils/consts'
import {suffle} from '../../utils/common'

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) =>{
    try {
        const res = await axios(`${BASE_URL}/products`);
        return res.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        list:[],
        filtered: [],
        related: [],
        search: [],
        isLoading: false,
    },
    reducers:{
        searchProduct: (state, {payload}) => {
            if(payload)
            state.search = state.list.filter(({title, category}) =>  
            title.toLowerCase().includes(payload.toLowerCase()) ||
            category.toLowerCase().includes(payload.toLowerCase()));
            else 
            state.search = [];
        },

        filterByPrice:(state, {payload}) =>{
            state.filtered = state.list.filter(({price}) => price < payload)
        },

        getRelatedProducts: (state, {payload}) => {

            const list= state.list.filter(({category, id}) => category === payload.category & id!==payload.id);
            state.related = suffle(list);
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
          });
          builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
          });
    }
});

export const {filterByPrice, getRelatedProducts, searchProduct} = productSlice.actions;

export default productSlice.reducer;