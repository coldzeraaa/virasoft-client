import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type UserFieldsFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, nickName?: string | null, createdAt: any, updatedAt: any, userAddresses: { __typename?: 'UserAddressConnection', edges: Array<{ __typename?: 'UserAddressEdge', node: { __typename?: 'UserAddress', address: { __typename?: 'Address', address1: string, address2: string, addressAlias?: string | null, id: string } } }> } };

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
  userAddresses {
    edges {
      node {
        address {
          address1
          address2
          addressAlias
          id
        }
      }
    }
  }
}
    `;