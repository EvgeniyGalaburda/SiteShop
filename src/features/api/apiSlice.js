import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/consts";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({id}) => `/products/${id}`,
            providesTags: ["Product"],
        }),

        getCategory: builder.query({
            query: ({id}) => `/products/category/${id}`,
            providesTags: ["Category"],
        })
    }),
});

export const {useGetProductQuery, useGetCategoryQuery} = apiSlice;