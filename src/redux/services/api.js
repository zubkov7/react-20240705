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
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `/review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      async onQueryStarted({ review, headphoneId }, lifecycleApi) {
        const getReviewsByHeadphoneIdPatchResult = lifecycleApi.dispatch(
          apiSlice.util.updateQueryData(
            "getReviewsByHeadphoneId",
            { headphoneId },
            (draft) => {
              const reviewToUpdate = draft.find(
                (draftReview) => draftReview.id === review.id
              );

              reviewToUpdate.text = review.text;
            }
          )
        );

        try {
          await lifecycleApi.queryFulfilled;
        } catch {
          getReviewsByHeadphoneIdPatchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = apiSlice;
