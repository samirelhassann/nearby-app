export interface GetPlaceServiceResponse {
  id: string;
  name: string;
  description: string;
  coupons: number;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
  cover: string;
  categoryId: string;
  rules: Rule[];
}

interface Rule {
  id: string;
  description: string;
  marketId: string;
}
