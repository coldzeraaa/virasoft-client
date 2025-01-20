import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PaymentCheckoutMutationVariables = Types.Exact<{
  input: Types.PaymentCheckoutInput;
}>;


export type PaymentCheckoutMutation = { __typename?: 'Mutation', paymentCheckout?: any | null };


export const PaymentCheckoutDocument = gql`
    mutation paymentCheckout($input: paymentCheckoutInput!) {
  paymentCheckout(input: $input)
}
    `;
export type PaymentCheckoutMutationFn = Apollo.MutationFunction<PaymentCheckoutMutation, PaymentCheckoutMutationVariables>;

/**
 * __usePaymentCheckoutMutation__
 *
 * To run a mutation, you first call `usePaymentCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentCheckoutMutation, { data, loading, error }] = usePaymentCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<PaymentCheckoutMutation, PaymentCheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PaymentCheckoutMutation, PaymentCheckoutMutationVariables>(PaymentCheckoutDocument, options);
      }
export type PaymentCheckoutMutationHookResult = ReturnType<typeof usePaymentCheckoutMutation>;
export type PaymentCheckoutMutationResult = Apollo.MutationResult<PaymentCheckoutMutation>;
export type PaymentCheckoutMutationOptions = Apollo.BaseMutationOptions<PaymentCheckoutMutation, PaymentCheckoutMutationVariables>;