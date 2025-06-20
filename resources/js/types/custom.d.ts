export type PriceCard = {
  name: string;
  price: number;
  items: {
    text: string;
    isAvailable: boolean;
  }[];
};
