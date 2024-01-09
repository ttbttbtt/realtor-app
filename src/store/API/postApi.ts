import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

export interface PostItem {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    email: string;
    phone_number: string;
    id: number;
    password: string;
    name: string;
    user_city: string;
    reg_date: string;
  };
  photos: string[];
  comments: string[];
}
export interface IGetPostListResponse {
  status: number;
  message: PostItem[];
}
export interface IGetPostItemByIdResponse {
  status: number;
  message: PostItem;
}
export interface IAddNewPostPayload {
  user_id: number;
  main_text: string;
}
export interface IAddNewPostResponse {
  status: number;
  post_id: number;
}
export interface IEditPostPayload {
  post_id: number;
  new_text: string;
}
export interface IEditPostResponse {
  status: number;
  message: string;
}


export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,

    //-------------------------------- new
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        //"56454238e5msh4cbd37a5441e8bcp10411ajsnafd43c64585e"
        "80a23d5f99msh3b0cbefced610b3p1d1c14jsn6e0dcbaf3233"
      );
      headers.set("x-rapidapi-host", "realtor16.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // все дома
    SearchAll: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/forsale",
        method: "GET",
        //body: payload,
        params: {
          location: "santa monica",
          type: "single_family,condos",
        },
      }),
      transformResponse: (response:any, meta, arg) =>{
        localStorage.setItem('allHomes',JSON.stringify(response));
        return response
      } ,
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
    }),

    // один дом
    SearchOne: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/property",
        method: "GET",
        //body: payload,
        params: {
          property_id: payload,
        },
      }),
      transformResponse: (response:any, meta, arg) =>{
        localStorage.setItem('oneHome',JSON.stringify(response));
        return response
      } ,
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
    }),
    //--------------------------------





    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => `/post`,
    }),

    getPostById: builder.query<IGetPostItemByIdResponse, string>({
      query: (postId: string) => `/post?post_id=${postId}`,
    }),

    // добавление поста
    addNewpost: builder.mutation<IAddNewPostResponse, IAddNewPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),

    // редактирование поста
    editPost: builder.mutation<IEditPostResponse, IEditPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "PUT",
        body: payload,
      }),
    }),

    // удаление поста
    deletePost: builder.mutation<any, any>({
      query: (post_id: string) => ({
        url: `/post/?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useLazyGetPostByIdQuery,
  useAddNewpostMutation,
  useSearchAllMutation,
  useSearchOneMutation,
} = postApi;
