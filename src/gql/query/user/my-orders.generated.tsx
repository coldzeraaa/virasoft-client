import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import { MeOrderFieldsFragmentDoc } from "../../fragment/me-order.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MyOrdersQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type MyOrdersQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: string;
    orders: {
      __typename?: "OrderConnection";
      edges: Array<{
        __typename?: "OrderEdge";
        node: {
          __typename?: "Order";
          id: string;
          number: string;
          createdAt: any;
          total?: number | null;
          itemCount?: number | null;
          paymentStatus: Types.PaymentStatus;
          items: Array<{
            __typename?: "Item";
            id: string;
            variant: {
              __typename?: "Variant";
              id: string;
              images: Array<string>;
              product: {
                __typename?: "Product";
                id: string;
                name: string;
                slug: string;
              };
            };
          }>;
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        endCursor?: string | null;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
      };
    };
  } | null;
};

export const MyOrdersDocument = gql`
  query myOrders($after: String) {
    me {
      id
      orders(
        first: 20
        after: $after
        sort: { field: "createdAt", direction: desc }
      ) {
        edges {
          node {
            ...MeOrderFields
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
  ${MeOrderFieldsFragmentDoc}
`;

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options,
  );
}
export function useMyOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyOrdersQuery,
    MyOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options,
  );
}
export function useMyOrdersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options,
  );
}
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>;
export type MyOrdersLazyQueryHookResult = ReturnType<
  typeof useMyOrdersLazyQuery
>;
export type MyOrdersSuspenseQueryHookResult = ReturnType<
  typeof useMyOrdersSuspenseQuery
>;
export type MyOrdersQueryResult = Apollo.QueryResult<
  MyOrdersQuery,
  MyOrdersQueryVariables
>;
