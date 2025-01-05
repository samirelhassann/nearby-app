import { constructEndpoint } from "./utils/construct-endpoint";

enum PATHS {
  CATEGORIES = "/categories",
  PLACES = "/markets/category/{categoryId}",
  PLACE = "/markets/{placeId}",
  GET_COUPON = "/coupon/{couponId}",
}

export const ENDPOINTS = {
  GET_CATEGORIES: () =>
    constructEndpoint({
      endpoint: PATHS.CATEGORIES,
    }),
  GET_PLACES: (categoryId: string) =>
    constructEndpoint({
      endpoint: PATHS.PLACES,
      pathParams: { categoryId },
    }),
  GET_PLACE: (placeId: string) =>
    constructEndpoint({
      endpoint: PATHS.PLACE,
      pathParams: { placeId },
    }),
  GET_COUPON: (couponId: string) =>
    constructEndpoint({
      endpoint: PATHS.GET_COUPON,
      pathParams: { couponId },
    }),
};
