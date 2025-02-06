import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeOrdersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.OrderFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;


export type MeOrdersQuery = { __typename?: 'Query', me?: { __typename?: 'User', orders: { __typename?: 'OrderConnection', nodes: Array<{ __typename?: 'Order', id: string, total?: number | null, number: string, createdAt: any, itemTotal?: number | null, itemCount?: number | null, websiteId: string, items: Array<{ __typename?: 'Item', price: number, total: number, quantity: number, order?: { __typename?: 'Order', total?: number | null } | null, variant: { __typename?: 'Variant', id: string, price: number, sku: string, images: Array<string>, product: { __typename?: 'Product', name: string } } }>, payments: Array<{ __typename?: 'Payment', id: string, source: any }> }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } | null };


export const MeOrdersDocument = gql`
    query meOrders($filter: OrderFilter, $first: Int, $last: Int, $before: String, $after: String, $sort: SortFilter) {
  me {
    orders(
      filter: $filter
      first: $first
      last: $last
      after: $after
      before: $before
      sort: $sort
    ) {
      nodes {
        id
        total
        number
        createdAt
        itemTotal
        itemCount
        websiteId
        items {
          order {
            total
          }
          variant {
            id
            price
            sku
            product {
              name
            }
            images
          }
          price
          total
          quantity
        }
        payments {
          id
          source
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
    `;

/**
 * __useMeOrdersQuery__
 *
 * To run a query within a React component, call `useMeOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useMeOrdersQuery(baseOptions?: Apollo.QueryHookOptions<MeOrdersQuery, MeOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeOrdersQuery, MeOrdersQueryVariables>(MeOrdersDocument, options);
      }
export function useMeOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeOrdersQuery, MeOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeOrdersQuery, MeOrdersQueryVariables>(MeOrdersDocument, options);
        }
export function useMeOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeOrdersQuery, MeOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeOrdersQuery, MeOrdersQueryVariables>(MeOrdersDocument, options);
        }
export type MeOrdersQueryHookResult = ReturnType<typeof useMeOrdersQuery>;
export type MeOrdersLazyQueryHookResult = ReturnType<typeof useMeOrdersLazyQuery>;
export type MeOrdersSuspenseQueryHookResult = ReturnType<typeof useMeOrdersSuspenseQuery>;
export type MeOrdersQueryResult = Apollo.QueryResult<MeOrdersQuery, MeOrdersQueryVariables>;