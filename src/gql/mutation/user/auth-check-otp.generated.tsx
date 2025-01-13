import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CheckOtpMutationVariables = Types.Exact<{
  input: Types.CheckOtpInput;
}>;


export type CheckOtpMutation = { __typename?: 'Mutation', checkOtp?: boolean | null };


export const CheckOtpDocument = gql`
    mutation checkOtp($input: checkOtpInput!) {
  checkOtp(input: $input)
}
    `;
export type CheckOtpMutationFn = Apollo.MutationFunction<CheckOtpMutation, CheckOtpMutationVariables>;

/**
 * __useCheckOtpMutation__
 *
 * To run a mutation, you first call `useCheckOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkOtpMutation, { data, loading, error }] = useCheckOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckOtpMutation(baseOptions?: Apollo.MutationHookOptions<CheckOtpMutation, CheckOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckOtpMutation, CheckOtpMutationVariables>(CheckOtpDocument, options);
      }
export type CheckOtpMutationHookResult = ReturnType<typeof useCheckOtpMutation>;
export type CheckOtpMutationResult = Apollo.MutationResult<CheckOtpMutation>;
export type CheckOtpMutationOptions = Apollo.BaseMutationOptions<CheckOtpMutation, CheckOtpMutationVariables>;