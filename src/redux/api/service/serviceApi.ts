import { IService } from "./type";
import { rootApi } from "../rootApi";

export const serviceApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation<IService, Partial<IService>>({
      query: (body) => ({
        url: "/services",
        method: "POST",
        body,
      }),
    }),
    getAllService: builder.query<IService[], void>({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getServiceById: builder.query<IService, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
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
    }),
    deleteService: builder.mutation<void, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
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
