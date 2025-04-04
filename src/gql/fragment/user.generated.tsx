import * as Types from "../graphql.d";

import { gql } from "@apollo/client";
export type UserFieldsFragment = {
  __typename?: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  mobile?: string | null;
  nickName?: string | null;
  createdAt: any;
  updatedAt: any;
};

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    firstName
    lastName
    email
    mobile
    nickName
    createdAt
    updatedAt
  }
`;
