import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import { CurrentPageFieldsFragmentDoc } from "../../fragment/current-page.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CurrentPageQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"]["input"];
}>;

export type CurrentPageQuery = {
  __typename?: "Query";
  currentPage?: {
    __typename?: "Page";
    id: string;
    items?: any | null;
    title: string;
  } | null;
};

export const CurrentPageDocument = gql`
  query currentPage($slug: String!) {
    currentPage(slug: $slug) {
      ...CurrentPageFields
    }
  }
  ${CurrentPageFieldsFragmentDoc}
`;

/**
 * __useCurrentPageQuery__
 *
 * To run a query within a React component, call `useCurrentPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCurrentPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    CurrentPageQuery,
    CurrentPageQueryVariables
  > &
    (
      | { variables: CurrentPageQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentPageQuery, CurrentPageQueryVariables>(
    CurrentPageDocument,
    options,
  );
}
export function useCurrentPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentPageQuery,
    CurrentPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentPageQuery, CurrentPageQueryVariables>(
    CurrentPageDocument,
    options,
  );
}
export function useCurrentPageSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        CurrentPageQuery,
        CurrentPageQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CurrentPageQuery, CurrentPageQueryVariables>(
    CurrentPageDocument,
    options,
  );
}
export type CurrentPageQueryHookResult = ReturnType<typeof useCurrentPageQuery>;
export type CurrentPageLazyQueryHookResult = ReturnType<
  typeof useCurrentPageLazyQuery
>;
export type CurrentPageSuspenseQueryHookResult = ReturnType<
  typeof useCurrentPageSuspenseQuery
>;
export type CurrentPageQueryResult = Apollo.QueryResult<
  CurrentPageQuery,
  CurrentPageQueryVariables
>;
