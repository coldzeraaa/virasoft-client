import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
export type MeOrderFieldsFragment = { __typename?: 'Order', id: string, number: string, createdAt: any, total?: number | null, itemCount?: number | null, paymentStatus: Types.PaymentStatus, items: Array<{ __typename?: 'Item', id: string, variant: { __typename?: 'Variant', id: string, images: Array<string>, product: { __typename?: 'Product', id: string, name: string, slug: string } } }> };

export const MeOrderFieldsFragmentDoc = gql`
    fragment MeOrderFields on Order {
  id
  number
  createdAt
  total
  itemCount
  paymentStatus
  items {
    id
    variant {
      id
      images
      product {
        id
        name
        slug
      }
    }
  }
}
    `;