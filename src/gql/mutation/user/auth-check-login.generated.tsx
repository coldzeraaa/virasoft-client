import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AuthCheckLoginMutationVariables = Types.Exact<{
  input: Types.AuthCheckLoginInput;
}>;

export type AuthCheckLoginMutation = {
  __typename?: "Mutation";
  authCheckLogin?: { __typename?: "AuthCheckLogin"; exists: boolean } | null;
};

export const AuthCheckLoginDocument = gql`
  mutation authCheckLogin($input: authCheckLoginInput!) {
    authCheckLogin(input: $input) {
      exists
    }
  }
`;
export type AuthCheckLoginMutationFn = Apollo.MutationFunction<
  AuthCheckLoginMutation,
  AuthCheckLoginMutationVariables
>;

/**
 * __useAuthCheckLoginMutation__
 *
 * To run a mutation, you first call `useAuthCheckLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthCheckLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authCheckLoginMutation, { data, loading, error }] = useAuthCheckLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthCheckLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthCheckLoginMutation,
    AuthCheckLoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthCheckLoginMutation,
    AuthCheckLoginMutationVariables
  >(AuthCheckLoginDocument, options);
}
export type AuthCheckLoginMutationHookResult = ReturnType<
  typeof useAuthCheckLoginMutation
>;
export type AuthCheckLoginMutationResult =
  Apollo.MutationResult<AuthCheckLoginMutation>;
export type AuthCheckLoginMutationOptions = Apollo.BaseMutationOptions<
  AuthCheckLoginMutation,
  AuthCheckLoginMutationVariables
>;
