import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

// отправ
interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

// ответ
interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

// отправ
interface ILoginUserPayload {
  email: string;
  password: string;
}

// ответ
interface ILoginUserResponse extends IRegisterUserResponse {}

// interface IGetUserResponse {
//   status: number;
//   message: {
//     mail: string;
//     phone_number: string;
//     user_id: number;
//     name: string;
//     reg_date: string;
//     city: string;
//   };
// }

//------------------------------------ NEW
interface IGetUserResponse {
  count: number;
  results: Array<object>;
  total: number;
}
//------------------------------------

// создаёт редюсер
export const authApi = createApi({
  reducerPath: "authApi",
  //----------------------------------- NEW
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key",
                  "f5ccf2adebmsh669e97d815a046dp17df69jsnc844b97dff78");
      headers.set("x-rapidapi-host", "realtor16.p.rapidapi.com");
      return headers;
    },
  }),
  //------------------------------------
 // baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
      {
        query: (payload) => ({
          url: "/registration",
          method: "POST",
          body: payload,
        }),
      }
    ),

    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),

    getUser: builder.query<IGetUserResponse, string>({
      query: (userId) => `/user?user_id=${userId}`,
    }),
   



  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery
} = authApi;
