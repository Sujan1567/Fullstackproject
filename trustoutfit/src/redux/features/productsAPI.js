import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery ({baseUrl: "http://localhost:8081"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => "CartProducts",
        })

    })

})

export const {useGetAllProductsQuery} = productsAPI;