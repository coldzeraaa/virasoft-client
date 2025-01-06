import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthCheckOtpMutationVariables = Types.Exact<{
  input: Types.CheckOtpInput;
}>;


export type AuthCheckOtpMutation = { __typename?: 'Mutation', checkOtp?: boolean | null };


export const AuthCheckOtpDocument = gql`
    mutation authCheckOTP($input: checkOtpInput!) {
  checkOtp(input: $input)
}
    `;
export type AuthCheckOtpMutationFn = Apollo.MutationFunction<AuthCheckOtpMutation, AuthCheckOtpMutationVariables>;

/**
 * __useAuthCheckOtpMutation__
 *
 * To run a mutation, you first call `useAuthCheckOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthCheckOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authCheckOtpMutation, { data, loading, error }] = useAuthCheckOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthCheckOtpMutation(baseOptions?: Apollo.MutationHookOptions<AuthCheckOtpMutation, AuthCheckOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthCheckOtpMutation, AuthCheckOtpMutationVariables>(AuthCheckOtpDocument, options);
      }
export type AuthCheckOtpMutationHookResult = ReturnType<typeof useAuthCheckOtpMutation>;
export type AuthCheckOtpMutationResult = Apollo.MutationResult<AuthCheckOtpMutation>;
export type AuthCheckOtpMutationOptions = Apollo.BaseMutationOptions<AuthCheckOtpMutation, AuthCheckOtpMutationVariables>;