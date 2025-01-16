import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateCheckoutAddressMutationVariables = Types.Exact<{
  input: Types.UpdateCheckoutAddressInput;
}>;


export type UpdateCheckoutAddressMutation = { __typename?: 'Mutation', updateCheckoutAddress?: { __typename?: 'Order', shipAddress?: { __typename?: 'UserAddress', address: { __typename?: 'Address', id: string } } | null } | null };


export const UpdateCheckoutAddressDocument = gql`
    mutation updateCheckoutAddress($input: updateCheckoutAddressInput!) {
  updateCheckoutAddress(input: $input) {
    shipAddress {
      address {
        id
      }
    }
  }
}
    `;
export type UpdateCheckoutAddressMutationFn = Apollo.MutationFunction<UpdateCheckoutAddressMutation, UpdateCheckoutAddressMutationVariables>;

/**
 * __useUpdateCheckoutAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutAddressMutation, { data, loading, error }] = useUpdateCheckoutAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCheckoutAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutAddressMutation, UpdateCheckoutAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutAddressMutation, UpdateCheckoutAddressMutationVariables>(UpdateCheckoutAddressDocument, options);
      }
export type UpdateCheckoutAddressMutationHookResult = ReturnType<typeof useUpdateCheckoutAddressMutation>;
export type UpdateCheckoutAddressMutationResult = Apollo.MutationResult<UpdateCheckoutAddressMutation>;
export type UpdateCheckoutAddressMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutAddressMutation, UpdateCheckoutAddressMutationVariables>;