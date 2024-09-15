import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import {BASE_URL} from '../../utils/consts'

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) =>{
    try {
        const res = await axios(`${BASE_URL}/products/categories`);
        return res.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list:[],
        showForm: false,
    },
    reducers:{
        toggleCat: (state, {payload}) => {
            state.showForm = payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
          });
          builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
          });
    }
});

export const {toggleCat} = categoriesSlice.actions;

export default categoriesSlice.reducer;