type Image = {
  alt: string
  filename: string
}

export type Price = {
  wasPrice: number;
  price: number;
  currencyCode: string;
}

type FacetItem = {
  key: string;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  images: Image[];
  departure: {
    groupPrice: Price;
    singlePrice: Price;
    metaData: {
      boardBasis: string;
      duration: number;
      nights: number;
      solo: boolean;
    }
    bookingStatus: string;
  },
  metaData: {
    meals: string;
    numberOfExcursions: number;
  }
  destinations: string[];
  holidayTypes: string[];
  productTypes: string[];
}

export interface Facet {
  key: string;
  items: FacetItem[];
}