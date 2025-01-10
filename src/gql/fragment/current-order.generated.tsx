import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type CurrentOrderFieldsFragment = { __typename?: 'Order', id: string, number: string, token?: string | null, userId?: string | null, total?: number | null, itemTotal?: number | null, itemCount?: number | null, items: Array<{ __typename?: 'Item', id: string, price: number, quantity: number, variant: { __typename?: 'Variant', id: string, images: Array<string>, price: number, product: { __typename?: 'Product', id: string, name: string } } }> };

export const CurrentOrderFieldsFragmentDoc = gql`
    fragment CurrentOrderFields on Order {
  id
  number
  token
  userId
  total
  itemTotal
  itemCount
  items {
    id
    price
    quantity
    variant {
      id
      images
      price
      product {
        id
        name
      }
    }
  }
}
    `;