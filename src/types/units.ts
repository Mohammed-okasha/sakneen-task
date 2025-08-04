interface Image {
  src: string;
}

export interface Unit {
  _id: string;
  unit_id: string;
  unit_type: string;
  total_price: number;
  for_sale: boolean;
  photos: Image[];
}

export type QueryParams = Record<string, string | number>;
