import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import { MeOrderFieldsFragmentDoc } from "../../fragment/me-order.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MeDashboardQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeDashboardQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: string;
    orders: {
      __typename?: "OrderConnection";
      nodes: Array<{
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
      }>;
    };
  } | null;
};

export const MeDashboardDocument = gql`
  query meDashboard {
    me {
      id
      orders(sort: { field: "createdAt", direction: desc }, first: 2) {
        nodes {
          ...MeOrderFields
        }
      }
    }
  }
  ${MeOrderFieldsFragmentDoc}
`;

/**
 * __useMeDashboardQuery__
 *
 * To run a query within a React component, call `useMeDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeDashboardQuery,
    MeDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeDashboardQuery, MeDashboardQueryVariables>(
    MeDashboardDocument,
    options,
  );
}
export function useMeDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeDashboardQuery,
    MeDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeDashboardQuery, MeDashboardQueryVariables>(
    MeDashboardDocument,
    options,
  );
}
export function useMeDashboardSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MeDashboardQuery,
        MeDashboardQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeDashboardQuery, MeDashboardQueryVariables>(
    MeDashboardDocument,
    options,
  );
}
export type MeDashboardQueryHookResult = ReturnType<typeof useMeDashboardQuery>;
export type MeDashboardLazyQueryHookResult = ReturnType<
  typeof useMeDashboardLazyQuery
>;
export type MeDashboardSuspenseQueryHookResult = ReturnType<
  typeof useMeDashboardSuspenseQuery
>;
export type MeDashboardQueryResult = Apollo.QueryResult<
  MeDashboardQuery,
  MeDashboardQueryVariables
>;
