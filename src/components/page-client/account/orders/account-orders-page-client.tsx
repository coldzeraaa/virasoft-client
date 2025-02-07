'use client';

import { ResultLoadingErrorEmpty } from '@/components/result/result-loading-error-empty';
import { SingleOrder } from '@/components/single/single-order';
import { useMyOrdersQuery } from '@/gql/query/user/my-orders.generated';

export function AccountOrdersPageClient() {
  const { data, loading, error, fetchMore } = useMyOrdersQuery();

  if (loading || !data?.me?.orders.edges || error)
    return (
      <ResultLoadingErrorEmpty
        loading={loading}
        dataUndefined={!data?.me?.orders}
        empty={data?.me?.orders.edges.length === 0}
        error={error}
      />
    );

  return (
    <>
      <ul className="space-y-2">
        {data.me.orders.edges.map(({ node }) => (
          <li key={node.id} className="rounded-lg bg-base-200 p-4 transition-all hover:shadow">
            <SingleOrder {...node} />
          </li>
        ))}
      </ul>
      {data.me.orders.pageInfo.hasNextPage && (
        <div className="mt-4" onClick={() => fetchMore({ variables: { after: data?.me?.orders.pageInfo.endCursor } })}>
          <button type="button" className="btn btn-primary btn-sm btn-wide mx-auto block">
            Fetch more
          </button>
        </div>
      )}
    </>
  );
}
