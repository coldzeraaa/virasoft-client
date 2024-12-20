export interface HitType {
  id: string;
  images: string[];
  image: string;
  name: string;
  name_en?: string;
  published: boolean;
  approved: boolean;
  title_en?: string;
  price: number;
  selling_price: number;
  sku?: string;
  slug: string;
  title: string;
  is_sale: boolean;
  variants?: {
    id: number;
    sku?: string;
    price: number;
    options_text: string;
    images?: string[];
  }[];
  vendor?: {
    id: number;
    name: string;
  };
  vendor_id?: number;
}
