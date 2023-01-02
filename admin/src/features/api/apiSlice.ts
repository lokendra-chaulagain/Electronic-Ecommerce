import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Banner, Category, Color, Contact, Size, Product } from "../../interfaces/global";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  tagTypes: ["Category", "Size", "Color", "Contact", "Banner", "Product"],

  endpoints: (builder) => ({
    getCategories: builder.query<Category, void>({
      query: () => "/category",
      transformResponse: (res: any) => res.sort((a: Category, b: Category) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query: (id) => `/category/${id}`,
      providesTags: ["Category"],
    }),

    addNewCategory: builder.mutation<{}, Category>({
      query: (newCategory) => ({
        url: "/category",
        method: "POST",
        body: newCategory,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<void, Category>({
      query: (updatedCategory) => {
        return {
          url: `/category/${updatedCategory.id}`,
          method: "PATCH",
          body: updatedCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<number, void>({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    //Product-------------------------------------->
    getProducts: builder.query<Product[], void>({
      query: () => "/product",
      transformResponse: (res: Product[]) => res.sort((a: Product, b: Product) => b.id - a.id),
      providesTags: ["Product"],
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product",
        method: "POST",
        body: newProduct,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: (updatedProduct) => {
        return {
          url: `/product/${updatedProduct.id}`,
          method: "PATCH",
          body: updatedProduct,
        };
      },
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Product"],
    }),

    // Size------------------------------->

    GetSizes: builder.query<Size[], void>({
      query: () => "/size",
      transformResponse: (res: Size[]) => res.sort((a: Size, b: Size) => b.id - a.id),
      providesTags: ["Size"],
    }),

    addNewSize: builder.mutation({
      query: (NewSize) => ({
        url: "/size",
        method: "POST",
        body: NewSize,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Size"],
    }),

    UpdateSize: builder.mutation({
      query: (updatedSize) => {
        return {
          url: `/size/${updatedSize.id}`,
          method: "PATCH",
          body: updatedSize,
        };
      },
      invalidatesTags: ["Size"],
    }),

    DeleteSize: builder.mutation({
      query: (id) => ({
        url: `/size/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Size"],
    }),

    // Color------------------------------->
    getColors: builder.query<Color[], void>({
      query: () => "/color",
      transformResponse: (res: Color[]) => res.sort((a: Color, b: Color) => b.id - a.id),
      providesTags: ["Color"],
    }),

    addNewColor: builder.mutation({
      query: (NewColor) => ({
        url: "/color",
        method: "POST",
        body: NewColor,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Color"],
    }),

    updateColor: builder.mutation({
      query: (updatedColor) => {
        return {
          url: `/color/${updatedColor.id}`,
          method: "PATCH",
          body: updatedColor,
        };
      },
      invalidatesTags: ["Color"],
    }),

    deleteColor: builder.mutation({
      query: (id) => ({
        url: `/color/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Color"],
    }),

    //Contact-------------------------------------->
    getContacts: builder.query<Contact[], void>({
      query: () => "/contact",
      transformResponse: (res: Contact[]) => res.sort((a: Contact, b: Contact) => b.id - a.id),
      providesTags: ["Contact"],
    }),

    addNewContact: builder.mutation({
      query: (newContact) => ({
        url: "/contact",
        method: "POST",
        body: newContact,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Contact"],
    }),

    updateContact: builder.mutation({
      query: (updatedContact) => {
        return {
          url: `/contact/${updatedContact.id}`,
          method: "PATCH",
          body: updatedContact,
        };
      },
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Contact"],
    }),

    //Banner-------------------------------------->
    getBanners: builder.query<Banner[], void>({
      query: () => "/banner",
      transformResponse: (res: Banner[]) => res.sort((a: Banner, b: Banner) => b.id - a.id),
      providesTags: ["Banner"],
    }),

    addNewBanner: builder.mutation({
      query: (newBanner) => ({
        url: "/banner",
        method: "POST",
        body: newBanner,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation({
      query: (updatedBanner) => {
        return {
          url: `/banner/${updatedBanner.id}`,
          method: "PATCH",
          body: updatedBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/banner/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});
export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  
  useGetSizesQuery,
  useAddNewSizeMutation,
  useUpdateSizeMutation,
  useDeleteSizeMutation,
  useGetContactsQuery,
  useAddNewContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
  useGetBannersQuery,
  useAddNewBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useGetColorsQuery,
  useAddNewColorMutation,
  useUpdateColorMutation,
  useDeleteColorMutation,

  useGetProductsQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
