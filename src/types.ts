type Image = {
  alt: string
  filename: string
}

type Price = {
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
      days: number;
      nights: number;
    }
  }
  holidayTypes: string[];
  productTypes: string[];
}

export interface Facet {
  key: string;
  items: FacetItem[];
}