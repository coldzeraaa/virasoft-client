import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MePaymentsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.OrderFilter>;
}>;


export type MePaymentsQuery = { __typename?: 'Query', me?: { __typename?: 'User', orders: { __typename?: 'OrderConnection', nodes: Array<{ __typename?: 'Order', payments: Array<{ __typename?: 'Payment', paymentMethod: { __typename?: 'PaymentMethod', preferences?: any | null } }> }> } } | null };


export const MePaymentsDocument = gql`
    query mePayments($filter: OrderFilter) {
  me {
    orders(filter: $filter) {
      nodes {
        payments {
          paymentMethod {
            preferences
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMePaymentsQuery__
 *
 * To run a query within a React component, call `useMePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMePaymentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMePaymentsQuery(baseOptions?: Apollo.QueryHookOptions<MePaymentsQuery, MePaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MePaymentsQuery, MePaymentsQueryVariables>(MePaymentsDocument, options);
      }
export function useMePaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MePaymentsQuery, MePaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MePaymentsQuery, MePaymentsQueryVariables>(MePaymentsDocument, options);
        }
export function useMePaymentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MePaymentsQuery, MePaymentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MePaymentsQuery, MePaymentsQueryVariables>(MePaymentsDocument, options);
        }
export type MePaymentsQueryHookResult = ReturnType<typeof useMePaymentsQuery>;
export type MePaymentsLazyQueryHookResult = ReturnType<typeof useMePaymentsLazyQuery>;
export type MePaymentsSuspenseQueryHookResult = ReturnType<typeof useMePaymentsSuspenseQuery>;
export type MePaymentsQueryResult = Apollo.QueryResult<MePaymentsQuery, MePaymentsQueryVariables>;