import { RequestModel } from "@/services/types/request-model";

interface PathParams {
  couponId: string;
}

export type GetCouponServiceRequest = RequestModel<{
  path: PathParams;
}>;
