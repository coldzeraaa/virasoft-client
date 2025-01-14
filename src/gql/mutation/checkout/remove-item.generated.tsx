import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { CurrentOrderFieldsFragmentDoc } from '../../fragment/current-order.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemoveItemMutationVariables = Types.Exact<{
  input: Types.RemoveItemInput;
}>;


export type RemoveItemMutation = { __typename?: 'Mutation', removeItem?: { __typename?: 'Order', id: string, number: string, token?: string | null, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, sku: string, product: { __typename?: 'Product', id: string, name: string } } }> } | null };


export const RemoveItemDocument = gql`
    mutation removeItem($input: removeItemInput!) {
  removeItem(input: $input) {
    ...CurrentOrderFields
  }
}
    ${CurrentOrderFieldsFragmentDoc}`;
export type RemoveItemMutationFn = Apollo.MutationFunction<RemoveItemMutation, RemoveItemMutationVariables>;

/**
 * __useRemoveItemMutation__
 *
 * To run a mutation, you first call `useRemoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemMutation, { data, loading, error }] = useRemoveItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemMutation, RemoveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveItemMutation, RemoveItemMutationVariables>(RemoveItemDocument, options);
      }
export type RemoveItemMutationHookResult = ReturnType<typeof useRemoveItemMutation>;
export type RemoveItemMutationResult = Apollo.MutationResult<RemoveItemMutation>;
export type RemoveItemMutationOptions = Apollo.BaseMutationOptions<RemoveItemMutation, RemoveItemMutationVariables>;