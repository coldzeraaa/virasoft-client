import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MyOrderQueryVariables = Types.Exact<{
  number: Types.Scalars["String"]["input"];
}>;

export type MyOrderQuery = {
  __typename?: "Query";
  myOrder?: {
    __typename?: "Order";
    id: string;
    createdAt: any;
    total?: number | null;
    itemCount?: number | null;
    number: string;
    paymentStatus: Types.PaymentStatus;
    itemTotal?: number | null;
    payments: Array<{ __typename?: "Payment"; source: any; id: string }>;
    items: Array<{
      __typename?: "Item";
      id: string;
      total: number;
      price: number;
      quantity: number;
      variant: {
        __typename?: "Variant";
        images: Array<string>;
        sku: string;
        price: number;
        product: {
          __typename?: "Product";
          name: string;
          title: string;
          images: Array<string>;
        };
      };
    }>;
    shipAddress?: {
      __typename?: "UserAddress";
      address: {
        __typename?: "Address";
        address1: string;
        latitude?: string | null;
        longitude?: string | null;
        zipcode?: string | null;
        mobile?: string | null;
        phone?: string | null;
      };
    } | null;
  } | null;
};

export const MyOrderDocument = gql`
  query myOrder($number: String!) {
    myOrder(number: $number) {
      id
      createdAt
      total
      itemCount
      number
      paymentStatus
      itemTotal
      payments {
        source
        id
      }
      items {
        id
        total
        price
        quantity
        variant {
          product {
            name
            title
            images
          }
          images
          sku
          price
        }
      }
      shipAddress {
        address {
          address1
          latitude
          longitude
          zipcode
          mobile
          phone
        }
      }
    }
  }
`;

/**
 * __useMyOrderQuery__
 *
 * To run a query within a React component, call `useMyOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrderQuery({
 *   variables: {
 *      number: // value for 'number'
 *   },
 * });
 */
export function useMyOrderQuery(
  baseOptions: Apollo.QueryHookOptions<MyOrderQuery, MyOrderQueryVariables> &
    ({ variables: MyOrderQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyOrderQuery, MyOrderQueryVariables>(
    MyOrderDocument,
    options,
  );
}
export function useMyOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyOrderQuery,
    MyOrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyOrderQuery, MyOrderQueryVariables>(
    MyOrderDocument,
    options,
  );
}
export function useMyOrderSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MyOrderQuery, MyOrderQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyOrderQuery, MyOrderQueryVariables>(
    MyOrderDocument,
    options,
  );
}
export type MyOrderQueryHookResult = ReturnType<typeof useMyOrderQuery>;
export type MyOrderLazyQueryHookResult = ReturnType<typeof useMyOrderLazyQuery>;
export type MyOrderSuspenseQueryHookResult = ReturnType<
  typeof useMyOrderSuspenseQuery
>;
export type MyOrderQueryResult = Apollo.QueryResult<
  MyOrderQuery,
  MyOrderQueryVariables
>;
