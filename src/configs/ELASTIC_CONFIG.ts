export const ELASTIC_CONFIG = {
  result_attributes: ['id', 'name', 'options', 'images', 'title', 'position', 'price', 'sku'],
};

export interface ElasticConfigProps {
  result_attributes: string[];
}
