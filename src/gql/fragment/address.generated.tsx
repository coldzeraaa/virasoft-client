import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type AddressFieldsFragment = { __typename?: 'UserAddress', address: { __typename?: 'Address', address1: string, address2: string, addressAlias?: string | null, latitude?: string | null, longitude?: string | null } };

export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on UserAddress {
  address {
    address1
    address2
    addressAlias
    latitude
    longitude
  }
}
    `;