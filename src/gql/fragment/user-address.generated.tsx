import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type UserAddressFieldsFragment = { __typename?: 'UserAddress', id: string, user: { __typename?: 'User', id: string }, address: { __typename?: 'Address', id: string, address1: string, address2: string, addressAlias?: string | null, longitude?: string | null, latitude?: string | null } };

export const UserAddressFieldsFragmentDoc = gql`
    fragment UserAddressFields on UserAddress {
  id
  user {
    id
  }
  address {
    id
    address1
    address2
    addressAlias
    longitude
    latitude
  }
}
    `;