import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { CurrentOrderFieldsFragmentDoc } from '../../fragment/current-order.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentOrderQueryVariables = Types.Exact<{
  number?: Types.InputMaybe<Types.Scalars['String']['input']>;
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CurrentOrderQuery = { __typename?: 'Query', currentOrder?: { __typename?: 'Order', id: string, number: string, token: string, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, shipAddress?: { __typename?: 'UserAddress', address: { __typename?: 'Address', firstName?: string | null, mobile?: string | null, address1: string, address2: string, addressAlias?: string | null } } | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, sku: string, product: { __typename?: 'Product', id: string, name: string } } }> } | null };


export const CurrentOrderDocument = gql`
    query currentOrder($number: String, $token: String) {
  currentOrder(number: $number, token: $token) {
    ...CurrentOrderFields
  }
}
    ${CurrentOrderFieldsFragmentDoc}`;

/**
 * __useCurrentOrderQuery__
 *
 * To run a query within a React component, call `useCurrentOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentOrderQuery({
 *   variables: {
 *      number: // value for 'number'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCurrentOrderQuery(baseOptions?: Apollo.QueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
      }
export function useCurrentOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
        }
export function useCurrentOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
        }
export type CurrentOrderQueryHookResult = ReturnType<typeof useCurrentOrderQuery>;
export type CurrentOrderLazyQueryHookResult = ReturnType<typeof useCurrentOrderLazyQuery>;
export type CurrentOrderSuspenseQueryHookResult = ReturnType<typeof useCurrentOrderSuspenseQuery>;
export type CurrentOrderQueryResult = Apollo.QueryResult<CurrentOrderQuery, CurrentOrderQueryVariables>;