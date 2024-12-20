import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
import { getTrimmedArrayHelper } from '@/lib/helper/get-trimmed-array-helper';
import type { QueryStringType, QueryType } from '@/types/elastic-type';
import type { HitType } from '@/types/hit-type';

export async function elService(props: ElServiceProps): Promise<HitType[]> {
  return fetch(`${HOST_CONFIG.elastic.host}/${APP_CONFIG.appIndex}/_search`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      Authorization: `Basic ${btoa(`${HOST_CONFIG.elastic.username}:${HOST_CONFIG.elastic.password}`)}`,
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(getBody(props)),
  })
    .then((response) => response.json())
    .then((response) => response && response.hits.hits.map((hit: { _source: HitType; _id: string }) => ({ ...hit._source, id: hit._id })));
}

function getBody({ size, _source, sort, ...rest }: ElServiceProps): QueryType {
  return {
    query: { bool: { must: getMusts(rest) } },
    size: size || 12,
    _source: _source || [],
    sort: sort || [{ _score: 'desc' }],
  };
}

function getMusts(props: GetMustProps): QueryStringType[] {
  return Object.entries(props).reduce(
    (acc: QueryStringType[], cur) => {
      const [k, value] = cur;
      const key = k as keyof GetMustProps;
      if (key === 'skuString') return getSkuTerms(acc, value as NonNullable<ElServiceProps['skuString']>);
      if (key === 'ids') return getIds(acc, value as NonNullable<ElServiceProps['ids']>);
      return getQueryString(acc, value as string | string[], key);
    },
    [{ range: { price: { gt: 0 } } }],
  );
}

function getSkuTerms(acc: QueryStringType[], value: ElServiceProps['skuString']): QueryStringType[] {
  return [...acc, { terms: { SKU: getTrimmedArrayHelper(value) } }];
}
function getIds(acc: QueryStringType[], value: ElServiceProps['ids']): QueryStringType[] {
  if (!value) return [];
  return [...acc, { terms: { pid: value } }];
}
function getQueryString(acc: QueryStringType[], value: string | string[], key: string): QueryStringType[] {
  if (!value) return acc;
  return [...acc, { [Array.isArray(value) ? 'terms' : 'term']: { [key]: value } }];
}

interface ElServiceProps {
  ids?: string[];
  skuString?: string;
  'brand.id'?: string[] | string;
  'taxons.slug'?: string[] | string;
  size?: number;
  _source?: string[];
  sort?: Array<Record<string, string>>;
}

type GetMustProps = Omit<ElServiceProps, 'size' | '_source' | 'sort'>;
