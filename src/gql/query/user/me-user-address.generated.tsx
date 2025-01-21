import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { MeUserAddressFieldsFragmentDoc } from '../../fragment/me-user-address.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeUserAddressQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeUserAddressQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, nickName?: string | null, createdAt: any, updatedAt: any, userAddresses: { __typename?: 'UserAddressConnection', nodes: Array<{ __typename?: 'UserAddress', id: string, user: { __typename?: 'User', id: string }, address: { __typename?: 'Address', id: string, address1: string, address2: string, addressAlias?: string | null, longitude?: string | null, latitude?: string | null } }> } } | null };


export const MeUserAddressDocument = gql`
    query meUserAddress {
  me {
    ...MeUserAddressFields
  }
}
    ${MeUserAddressFieldsFragmentDoc}`;

/**
 * __useMeUserAddressQuery__
 *
 * To run a query within a React component, call `useMeUserAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeUserAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeUserAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeUserAddressQuery(baseOptions?: Apollo.QueryHookOptions<MeUserAddressQuery, MeUserAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeUserAddressQuery, MeUserAddressQueryVariables>(MeUserAddressDocument, options);
      }
export function useMeUserAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeUserAddressQuery, MeUserAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeUserAddressQuery, MeUserAddressQueryVariables>(MeUserAddressDocument, options);
        }
export function useMeUserAddressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeUserAddressQuery, MeUserAddressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeUserAddressQuery, MeUserAddressQueryVariables>(MeUserAddressDocument, options);
        }
export type MeUserAddressQueryHookResult = ReturnType<typeof useMeUserAddressQuery>;
export type MeUserAddressLazyQueryHookResult = ReturnType<typeof useMeUserAddressLazyQuery>;
export type MeUserAddressSuspenseQueryHookResult = ReturnType<typeof useMeUserAddressSuspenseQuery>;
export type MeUserAddressQueryResult = Apollo.QueryResult<MeUserAddressQuery, MeUserAddressQueryVariables>;