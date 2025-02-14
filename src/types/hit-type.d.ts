export interface HitType {
  id: string;
  name: string;
  title: string;
  slug: string;
  sku?: string;
  price: number;
  images: string[];
  is_sale?: boolean;
  selling_price?: number;
  position?: number;
  vendor?: {
    name?: string;
    images?: string[];
  };
}
