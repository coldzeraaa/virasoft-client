export const ELASTIC_CONFIG = {
  result_attributes: ['id', 'name', 'options', 'images', 'title', 'position'],
};

export interface ElasticConfigProps {
  result_attributes: string[];
}
