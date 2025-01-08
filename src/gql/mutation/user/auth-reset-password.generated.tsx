import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthResetPasswordMutationVariables = Types.Exact<{
  input: Types.ResetPasswordInput;
}>;


export type AuthResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'User', id: string } | null };


export const AuthResetPasswordDocument = gql`
    mutation AuthResetPassword($input: resetPasswordInput!) {
  resetPassword(input: $input) {
    id
  }
}
    `;
export type AuthResetPasswordMutationFn = Apollo.MutationFunction<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>;

/**
 * __useAuthResetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authResetPasswordMutation, { data, loading, error }] = useAuthResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>(AuthResetPasswordDocument, options);
      }
export type AuthResetPasswordMutationHookResult = ReturnType<typeof useAuthResetPasswordMutation>;
export type AuthResetPasswordMutationResult = Apollo.MutationResult<AuthResetPasswordMutation>;
export type AuthResetPasswordMutationOptions = Apollo.BaseMutationOptions<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>;