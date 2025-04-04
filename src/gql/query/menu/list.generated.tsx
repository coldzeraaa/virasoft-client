import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AllMenusQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MenuFilter>;
}>;

export type AllMenusQuery = {
  __typename?: "Query";
  currentWebsite?: {
    __typename?: "Website";
    id: string;
    menus: {
      __typename?: "MenuConnection";
      nodes: Array<{
        __typename?: "Menu";
        id: string;
        title: string;
        link: string;
        images?: Array<string> | null;
        icon?: string | null;
        children?: Array<{
          __typename?: "Menu";
          id: string;
          title: string;
          link: string;
          images?: Array<string> | null;
          icon?: string | null;
          children?: Array<{
            __typename?: "Menu";
            images?: Array<string> | null;
            title: string;
            link: string;
            icon?: string | null;
          }> | null;
        }> | null;
      }>;
    };
  } | null;
};

export const AllMenusDocument = gql`
  query allMenus($filter: MenuFilter) {
    currentWebsite {
      id
      menus(filter: $filter) {
        nodes {
          id
          title
          link
          images
          icon
          children {
            id
            title
            link
            images
            icon
            children {
              images
              title
              link
              icon
            }
          }
        }
      }
    }
  }
`;

/**
 * __useAllMenusQuery__
 *
 * To run a query within a React component, call `useAllMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMenusQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useAllMenusQuery(
  baseOptions?: Apollo.QueryHookOptions<AllMenusQuery, AllMenusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllMenusQuery, AllMenusQueryVariables>(
    AllMenusDocument,
    options,
  );
}
export function useAllMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllMenusQuery,
    AllMenusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllMenusQuery, AllMenusQueryVariables>(
    AllMenusDocument,
    options,
  );
}
export function useAllMenusSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<AllMenusQuery, AllMenusQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllMenusQuery, AllMenusQueryVariables>(
    AllMenusDocument,
    options,
  );
}
export type AllMenusQueryHookResult = ReturnType<typeof useAllMenusQuery>;
export type AllMenusLazyQueryHookResult = ReturnType<
  typeof useAllMenusLazyQuery
>;
export type AllMenusSuspenseQueryHookResult = ReturnType<
  typeof useAllMenusSuspenseQuery
>;
export type AllMenusQueryResult = Apollo.QueryResult<
  AllMenusQuery,
  AllMenusQueryVariables
>;
