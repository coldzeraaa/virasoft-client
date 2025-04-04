export interface QueryType {
  query: { bool: { must: Array<QueryStringType> } };
  size: number;
  _source: string[];
  sort: Array<Record<string, string>>;
}

export interface QueryStringType {
  bool?: {
    should: Array<{ query_string: { query: string; default_field: string } }>;
  };
  term?: { [k: string]: string | number };
  terms?: { [k: string]: (string | number)[] };
  exists?: { field: string };
  range?: Record<string, Record<string, number>>;
}
