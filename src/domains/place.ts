export interface Place {
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
  rules?: PlaceRule[];
}

export interface PlaceRule {
  id: string;
  description: string;
  marketId: string;
}
