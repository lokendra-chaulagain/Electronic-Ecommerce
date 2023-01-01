import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api',
    }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/category',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Category'],
        }),

        addNewCategory: builder.mutation({
            query: (newCategory) => ({
                url: '/category',
                method: 'POST',
                body: newCategory,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Category'],
        }),


        updateCategory: builder.mutation({
            query: (updatedCategory) => {
                return {
                    url: `/category/${updatedCategory.id}`,
                    method: 'PATCH',
                    body: updatedCategory
                }
            },
            invalidatesTags: ['Category'],
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Category'],
        }),

    }),
})
export const {
    useGetCategoriesQuery,
    useAddNewCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = apiSlice