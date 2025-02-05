import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type CurrentOrderFieldsFragment = { __typename?: 'Order', id: string, number: string, token: string, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, shipAddress?: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, firstName?: string | null, mobile?: string | null, address1: string, address2: string, addressAlias?: string | null } } | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, sku: string, product: { __typename?: 'Product', id: string, name: string } } }> };

export const CurrentOrderFieldsFragmentDoc = gql`
    fragment CurrentOrderFields on Order {
  id
  number
  token
  userId
  total
  itemTotal
  itemCount
  shipAddress {
    id
    address {
      id
      firstName
      mobile
      address1
      address2
      addressAlias
    }
  }
  items {
    id
    price
    quantity
    variant {
      id
      images
      price
      sku
      product {
        id
        name
      }
    }
  }
}
    `;