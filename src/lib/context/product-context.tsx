"use client";

import { createContext, FC, PropsWithChildren, useContext } from "react";

import type { ProductQuery } from "@/gql/query/product/id.generated";

export const ProductPageContext = createContext<ProductPageContextProps>({
  product: {
    id: "",
    images: [],
    name: "",
    title: "",
    variants: { nodes: [] },
    master: {
      id: "",
      price: 0,
      sku: "",
      images: [],
    },
  },
  variant: undefined,
  // setVariant: () => true,
});

export const useProductPage = () =>
  useContext<ProductPageContextProps>(ProductPageContext);

export const ProductPageProvider: FC<
  PropsWithChildren<{
    product: NonNullable<ProductQuery["product"]>;
    selectedVariant?: string;
  }>
> = ({ children, product, selectedVariant }) => (
  // const [variant, setVariant] = useState<NonNullable<ProductQuery['product']>['variants']['0'] | undefined>(
  //   product.variants.length > 1 ? undefined : product.master,
  // );

  <ProductPageContext.Provider
    value={{
      product,
      variant: selectedVariant
        ? product.variants.nodes.find((v) => v.sku === selectedVariant)
        : product.master,
      // setVariant,
    }}
  >
    {children}
  </ProductPageContext.Provider>
);

export interface ProductPageContextProps {
  product: NonNullable<ProductQuery["product"]>;
  variant:
    | NonNullable<ProductQuery["product"]>["variants"]["nodes"]["0"]
    | undefined;
  // setVariant(val?: NonNullable<ProductQuery['product']>['variants']['0']): void;
}
