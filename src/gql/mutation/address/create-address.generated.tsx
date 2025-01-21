import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { UserAddressFieldsFragmentDoc } from '../../fragment/user-address.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateAddressMutationVariables = Types.Exact<{
  input: Types.CreateUserAddressInput;
}>;


export type CreateAddressMutation = { __typename?: 'Mutation', createUserAddress?: { __typename?: 'UserAddress', id: string, user: { __typename?: 'User', id: string, userAddresses: { __typename?: 'UserAddressConnection', nodes: Array<{ __typename?: 'UserAddress', id: string, user: { __typename?: 'User', id: string }, address: { __typename?: 'Address', id: string, address1: string, address2: string, addressAlias?: string | null, longitude?: string | null, latitude?: string | null } }> } } } | null };


export const CreateAddressDocument = gql`
    mutation createAddress($input: createUserAddressInput!) {
  createUserAddress(input: $input) {
    id
    user {
      id
      userAddresses {
        nodes {
          ...UserAddressFields
        }
      }
    }
  }
}
    ${UserAddressFieldsFragmentDoc}`;
export type CreateAddressMutationFn = Apollo.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>;

/**
 * __useCreateAddressMutation__
 *
 * To run a mutation, you first call `useCreateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAddressMutation, { data, loading, error }] = useCreateAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateAddressMutation, CreateAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, options);
      }
export type CreateAddressMutationHookResult = ReturnType<typeof useCreateAddressMutation>;
export type CreateAddressMutationResult = Apollo.MutationResult<CreateAddressMutation>;
export type CreateAddressMutationOptions = Apollo.BaseMutationOptions<CreateAddressMutation, CreateAddressMutationVariables>;