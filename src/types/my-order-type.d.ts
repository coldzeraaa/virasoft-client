import { MyOrderQuery } from '@/gql/query/user/my-order.generated';

export interface MyOrderType {
  myOrder: MyOrderQuery['myOrder'];
}
