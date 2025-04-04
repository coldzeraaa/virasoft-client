import * as Types from "../../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SendOtpMutationVariables = Types.Exact<{
  input: Types.SendOtpInput;
}>;

export type SendOtpMutation = {
  __typename?: "Mutation";
  sendOtp?: { __typename?: "User"; id: string } | null;
};

export const SendOtpDocument = gql`
  mutation sendOtp($input: sendOtpInput!) {
    sendOtp(input: $input) {
      id
    }
  }
`;
export type SendOtpMutationFn = Apollo.MutationFunction<
  SendOtpMutation,
  SendOtpMutationVariables
>;

/**
 * __useSendOtpMutation__
 *
 * To run a mutation, you first call `useSendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutation, { data, loading, error }] = useSendOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendOtpMutation,
    SendOtpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendOtpMutation, SendOtpMutationVariables>(
    SendOtpDocument,
    options,
  );
}
export type SendOtpMutationHookResult = ReturnType<typeof useSendOtpMutation>;
export type SendOtpMutationResult = Apollo.MutationResult<SendOtpMutation>;
export type SendOtpMutationOptions = Apollo.BaseMutationOptions<
  SendOtpMutation,
  SendOtpMutationVariables
>;
