import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { CurrentOrderFieldsFragmentDoc } from '../../fragment/current-order.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EmptyItemMutationVariables = Types.Exact<{
  input: Types.EmptyItemInput;
}>;


export type EmptyItemMutation = { __typename?: 'Mutation', emptyItem?: { __typename?: 'Order', id: string, number: string, token: string, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, user?: { __typename?: 'User', id: string } | null, shipAddress?: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, firstName?: string | null, mobile?: string | null, address1: string, address2: string, addressAlias?: string | null } } | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, sku: string, product: { __typename?: 'Product', id: string, name: string } } }> } | null };


export const EmptyItemDocument = gql`
    mutation emptyItem($input: emptyItemInput!) {
  emptyItem(input: $input) {
    ...CurrentOrderFields
  }
}
    ${CurrentOrderFieldsFragmentDoc}`;
export type EmptyItemMutationFn = Apollo.MutationFunction<EmptyItemMutation, EmptyItemMutationVariables>;

/**
 * __useEmptyItemMutation__
 *
 * To run a mutation, you first call `useEmptyItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmptyItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emptyItemMutation, { data, loading, error }] = useEmptyItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEmptyItemMutation(baseOptions?: Apollo.MutationHookOptions<EmptyItemMutation, EmptyItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmptyItemMutation, EmptyItemMutationVariables>(EmptyItemDocument, options);
      }
export type EmptyItemMutationHookResult = ReturnType<typeof useEmptyItemMutation>;
export type EmptyItemMutationResult = Apollo.MutationResult<EmptyItemMutation>;
export type EmptyItemMutationOptions = Apollo.BaseMutationOptions<EmptyItemMutation, EmptyItemMutationVariables>;