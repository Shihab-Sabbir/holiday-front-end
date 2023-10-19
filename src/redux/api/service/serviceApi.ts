import { IService, IServiceResponse } from "./type";
import { rootApi } from "../rootApi";

export const serviceApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation<IService, Partial<IService>>({
      query: (body) => ({
        url: "/services",
        method: "POST",
        body,
      }),
      invalidatesTags:['service']
    }),
    getAllService: builder.query<IServiceResponse, void>({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags:['service']
    }),
    getServiceById: builder.query<IService, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags:['service']
    }),
    updateService: builder.mutation<
      IService,
      { id: string; data: Partial<IService> }
    >({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:['service']
    }),
    deleteService: builder.mutation<void, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['service']
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
