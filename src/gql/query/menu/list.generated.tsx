import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MenusQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MenuFilter>;
}>;


export type MenusQuery = { __typename?: 'Query', menus: { __typename?: 'MenuConnection', nodes: Array<{ __typename?: 'Menu', id: string, title: string, link: string, images?: Array<string> | null, children?: Array<{ __typename?: 'Menu', id: string, title: string, link: string, images?: Array<string> | null, children?: Array<{ __typename?: 'Menu', images?: Array<string> | null, title: string, link: string }> | null }> | null }> } };


export const MenusDocument = gql`
    query menus($filter: MenuFilter) {
  menus(filter: $filter) {
    nodes {
      id
      title
      link
      images
      children {
        id
        title
        link
        images
        children {
          images
          title
          link
        }
      }
    }
  }
}
    `;

/**
 * __useMenusQuery__
 *
 * To run a query within a React component, call `useMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMenusQuery(baseOptions?: Apollo.QueryHookOptions<MenusQuery, MenusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options);
      }
export function useMenusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenusQuery, MenusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options);
        }
export function useMenusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MenusQuery, MenusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options);
        }
export type MenusQueryHookResult = ReturnType<typeof useMenusQuery>;
export type MenusLazyQueryHookResult = ReturnType<typeof useMenusLazyQuery>;
export type MenusSuspenseQueryHookResult = ReturnType<typeof useMenusSuspenseQuery>;
export type MenusQueryResult = Apollo.QueryResult<MenusQuery, MenusQueryVariables>;