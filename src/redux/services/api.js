import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Review", "Headphone"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
      providesTags: [{ type: "Headphone", id: "ALL" }],
    }),
    getHeadphoneById: builder.query({
      query: ({ headphoneId }) => `/product/${headphoneId}`,
      providesTags: (result, _, { headphoneId }) => [
        { type: "Headphone", id: headphoneId },
      ],
    }),
    getReviewsByHeadphoneId: builder.query({
      query: ({ headphoneId }) => `/reviews?productId=${headphoneId}`,
      providesTags: (result, _, { headphoneId }) => [
        { type: "Review", headphoneId },
      ],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, _, { headphoneId }) => [
        { type: "Review", headphoneId },
        { type: "Review", id: result.id },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
} = apiSlice;
