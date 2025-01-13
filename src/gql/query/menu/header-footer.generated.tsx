import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HeaderFooterQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MenuFilter>;
}>;


export type HeaderFooterQuery = { __typename?: 'Query', menus: { __typename?: 'MenuConnection', nodes: Array<{ __typename?: 'Menu', children?: Array<{ __typename?: 'Menu', title: string, children?: Array<{ __typename?: 'Menu', title: string, images?: Array<string> | null, link: string }> | null }> | null }> } };


export const HeaderFooterDocument = gql`
    query headerFooter($filter: MenuFilter) {
  menus(filter: $filter) {
    nodes {
      children {
        title
        children {
          title
          images
          link
        }
      }
    }
  }
}
    `;

/**
 * __useHeaderFooterQuery__
 *
 * To run a query within a React component, call `useHeaderFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderFooterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useHeaderFooterQuery(baseOptions?: Apollo.QueryHookOptions<HeaderFooterQuery, HeaderFooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeaderFooterQuery, HeaderFooterQueryVariables>(HeaderFooterDocument, options);
      }
export function useHeaderFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeaderFooterQuery, HeaderFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeaderFooterQuery, HeaderFooterQueryVariables>(HeaderFooterDocument, options);
        }
export function useHeaderFooterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HeaderFooterQuery, HeaderFooterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HeaderFooterQuery, HeaderFooterQueryVariables>(HeaderFooterDocument, options);
        }
export type HeaderFooterQueryHookResult = ReturnType<typeof useHeaderFooterQuery>;
export type HeaderFooterLazyQueryHookResult = ReturnType<typeof useHeaderFooterLazyQuery>;
export type HeaderFooterSuspenseQueryHookResult = ReturnType<typeof useHeaderFooterSuspenseQuery>;
export type HeaderFooterQueryResult = Apollo.QueryResult<HeaderFooterQuery, HeaderFooterQueryVariables>;