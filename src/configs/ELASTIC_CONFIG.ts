export const ELASTIC_CONFIG = {
  result_attributes: [
    "id",
    "name",
    "options",
    "images",
    "title",
    "position",
    "slug",
    "price",
    "sku",
  ],
};

export interface ElasticConfigProps {
  result_attributes: string[];
}
