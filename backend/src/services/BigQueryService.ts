import { executeQuery } from './APIService';

export async function executeBigQuery(query: string): Promise<any> {
  return executeQuery(query, 'bigquery');
}
