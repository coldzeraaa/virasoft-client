'use client';

import { ResultLoadingErrorEmpty } from '@/components/result/result-loading-error-empty';
import { SingleOrder } from '@/components/single/single-order';
import { useMeDashboardQuery } from '@/gql/query/user/me-dashboard.generated';

export function AccountPageClient() {
  const { data, loading, error } = useMeDashboardQuery();

  if (!data?.me || error || loading || data.me.orders.nodes.length === 0)
    return (
      <ResultLoadingErrorEmpty loading={loading} dataUndefined={!data?.me} error={error} empty={data?.me?.orders.nodes.length === 0} />
    );

  const { nodes } = data.me.orders;

  return (
    <ul className="space-y-2">
      {nodes.map((order) => (
        <li key={order.id} className="rounded-lg bg-base-200 p-4 transition-all hover:shadow">
          <SingleOrder {...order} />
        </li>
      ))}
    </ul>
  );
}
