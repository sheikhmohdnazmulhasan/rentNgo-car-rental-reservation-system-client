import { TQueryParams } from "../../../interface/redux.args.params";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookingForAdmin: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(Object.keys(item)[0] as string, Object.values(item)[0] as string)
                    });
                };

                return {
                    url: '/bookings',
                    method: 'GET',
                    params,
                };
            },
            providesTags: ['booking']
        })
    })
});

export const { useGetBookingForAdminQuery } = bookingApi;