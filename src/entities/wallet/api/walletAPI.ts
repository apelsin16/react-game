import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../../app/config/network";

enum TAGS  {
    BALANCE = 'Balance' 
}

export const walletApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [TAGS.BALANCE],
    endpoints: (builder) => ({
        getBalance: builder.query({
            query: () => '/wallet',
            providesTags: [TAGS.BALANCE]
        }),
        updateBalance: builder.mutation({
            query: (body) => ({
                url: '/wallet',
                body,
            }),
            invalidatesTags: [TAGS.BALANCE]
        })
    })
    
})