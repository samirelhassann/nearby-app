import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

import { GetCouponServiceRequest } from "./types/get-coupon-service-request";
import { GetCouponServiceResponse } from "./types/get-coupon-service-response";

export async function getCouponService(requestModel: GetCouponServiceRequest) {
  const { path } = requestModel;

  const { data } = await api.patch<GetCouponServiceResponse>(
    ENDPOINTS.GET_COUPON(path.couponId),
  );

  return data;
}
