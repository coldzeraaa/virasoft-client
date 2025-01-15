import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DestroyUserAddressAddressMutationVariables = Types.Exact<{
  input: Types.DestroyUserAddressInput;
}>;


export type DestroyUserAddressAddressMutation = { __typename?: 'Mutation', destroyUserAddress?: { __typename?: 'UserAddress', address: { __typename?: 'Address', address1: string, address2: string, addressAlias?: string | null } } | null };


export const DestroyUserAddressAddressDocument = gql`
    mutation destroyUserAddressAddress($input: destroyUserAddressInput!) {
  destroyUserAddress(input: $input) {
    address {
      address1
      address2
      addressAlias
    }
  }
}
    `;
export type DestroyUserAddressAddressMutationFn = Apollo.MutationFunction<DestroyUserAddressAddressMutation, DestroyUserAddressAddressMutationVariables>;

/**
 * __useDestroyUserAddressAddressMutation__
 *
 * To run a mutation, you first call `useDestroyUserAddressAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyUserAddressAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyUserAddressAddressMutation, { data, loading, error }] = useDestroyUserAddressAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDestroyUserAddressAddressMutation(baseOptions?: Apollo.MutationHookOptions<DestroyUserAddressAddressMutation, DestroyUserAddressAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyUserAddressAddressMutation, DestroyUserAddressAddressMutationVariables>(DestroyUserAddressAddressDocument, options);
      }
export type DestroyUserAddressAddressMutationHookResult = ReturnType<typeof useDestroyUserAddressAddressMutation>;
export type DestroyUserAddressAddressMutationResult = Apollo.MutationResult<DestroyUserAddressAddressMutation>;
export type DestroyUserAddressAddressMutationOptions = Apollo.BaseMutationOptions<DestroyUserAddressAddressMutation, DestroyUserAddressAddressMutationVariables>;