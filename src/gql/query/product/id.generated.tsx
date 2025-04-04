import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ProductQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"]["input"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "Product";
    id: string;
    name: string;
    title: string;
    description?: string | null;
    images: Array<string>;
    master: {
      __typename?: "Variant";
      id: string;
      price: number;
      sku: string;
      images: Array<string>;
      height?: number | null;
      width?: number | null;
    };
    variants: {
      __typename?: "VariantConnection";
      nodes: Array<{
        __typename?: "Variant";
        id: string;
        price: number;
        sku: string;
      }>;
    };
  } | null;
};

export const ProductDocument = gql`
  query product($slug: String!) {
    product(slug: $slug) {
      id
      name
      title
      description
      images
      master {
        id
        price
        sku
        images
        height
        width
      }
      variants {
        nodes {
          id
          id
          price
          sku
        }
      }
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> &
    ({ variables: ProductQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductQuery,
    ProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export function useProductSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<
  typeof useProductSuspenseQuery
>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
