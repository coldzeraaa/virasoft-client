import * as Types from '../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthRegisterMutationVariables = Types.Exact<{
  input: Types.AuthRegisterInput;
}>;


export type AuthRegisterMutation = { __typename?: 'Mutation', authRegister?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, mobile?: string | null, id: string } | null };


export const AuthRegisterDocument = gql`
    mutation authRegister($input: authRegisterInput!) {
  authRegister(input: $input) {
    firstName
    lastName
    mobile
    id
  }
}
    `;
export type AuthRegisterMutationFn = Apollo.MutationFunction<AuthRegisterMutation, AuthRegisterMutationVariables>;

/**
 * __useAuthRegisterMutation__
 *
 * To run a mutation, you first call `useAuthRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRegisterMutation, { data, loading, error }] = useAuthRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthRegisterMutation(baseOptions?: Apollo.MutationHookOptions<AuthRegisterMutation, AuthRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthRegisterMutation, AuthRegisterMutationVariables>(AuthRegisterDocument, options);
      }
export type AuthRegisterMutationHookResult = ReturnType<typeof useAuthRegisterMutation>;
export type AuthRegisterMutationResult = Apollo.MutationResult<AuthRegisterMutation>;
export type AuthRegisterMutationOptions = Apollo.BaseMutationOptions<AuthRegisterMutation, AuthRegisterMutationVariables>;