import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import { CurrentOrderFieldsFragmentDoc } from '../../fragment/current-order.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddToCartMutationVariables = Types.Exact<{
  input: Types.AddToCartInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart?: { __typename?: 'Order', id: string, number: string, token: string, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, user?: { __typename?: 'User', id: string } | null, shipAddress?: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, firstName?: string | null, mobile?: string | null, address1: string, address2: string, addressAlias?: string | null } } | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, sku: string, product: { __typename?: 'Product', id: string, name: string } } }> } | null };


export const AddToCartDocument = gql`
    mutation addToCart($input: addToCartInput!) {
  addToCart(input: $input) {
    ...CurrentOrderFields
  }
}
    ${CurrentOrderFieldsFragmentDoc}`;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;