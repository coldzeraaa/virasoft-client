import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import { UserAddressFieldsFragmentDoc } from './user-address.generated';
export type MeUserAddressFieldsFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, nickName?: string | null, createdAt: any, updatedAt: any, userAddresses: { __typename?: 'UserAddressConnection', edges: Array<{ __typename?: 'UserAddressEdge', node: { __typename?: 'UserAddress', id: string, user: { __typename?: 'User', id: string }, address: { __typename?: 'Address', id: string, address1: string, address2: string, addressAlias?: string | null, longitude?: string | null, latitude?: string | null } } }> } };

export const MeUserAddressFieldsFragmentDoc = gql`
    fragment MeUserAddressFields on User {
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
        ...UserAddressFields
      }
    }
  }
}
    ${UserAddressFieldsFragmentDoc}`;