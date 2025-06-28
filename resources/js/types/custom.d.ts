export type PriceCard = {
  name: string;
  price: number;
  items: {
    text: string;
    isAvailable: boolean;
  }[];
};

export type Metals = {
  id: number;
  metal_type_name: string;
  paid: number;
};

export type MetalsForm = {
  metalType: string;
  amount: number | '';
  paid: number | '';
};

export type MetalTypes = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};
