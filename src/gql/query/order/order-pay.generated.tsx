import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type OrderPayQueryVariables = Types.Exact<{
  number: Types.Scalars["String"]["input"];
}>;

export type OrderPayQuery = {
  __typename?: "Query";
  order?: {
    __typename?: "Order";
    id: string;
    payments: Array<{ __typename?: "Payment"; source: any; id: string }>;
  } | null;
};

export const OrderPayDocument = gql`
  query orderPay($number: String!) {
    order(number: $number) {
      id
      payments {
        source
        id
      }
    }
  }
`;

/**
 * __useOrderPayQuery__
 *
 * To run a query within a React component, call `useOrderPayQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderPayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderPayQuery({
 *   variables: {
 *      number: // value for 'number'
 *   },
 * });
 */
export function useOrderPayQuery(
  baseOptions: Apollo.QueryHookOptions<OrderPayQuery, OrderPayQueryVariables> &
    ({ variables: OrderPayQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrderPayQuery, OrderPayQueryVariables>(
    OrderPayDocument,
    options,
  );
}
export function useOrderPayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OrderPayQuery,
    OrderPayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrderPayQuery, OrderPayQueryVariables>(
    OrderPayDocument,
    options,
  );
}
export function useOrderPaySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<OrderPayQuery, OrderPayQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<OrderPayQuery, OrderPayQueryVariables>(
    OrderPayDocument,
    options,
  );
}
export type OrderPayQueryHookResult = ReturnType<typeof useOrderPayQuery>;
export type OrderPayLazyQueryHookResult = ReturnType<
  typeof useOrderPayLazyQuery
>;
export type OrderPaySuspenseQueryHookResult = ReturnType<
  typeof useOrderPaySuspenseQuery
>;
export type OrderPayQueryResult = Apollo.QueryResult<
  OrderPayQuery,
  OrderPayQueryVariables
>;
