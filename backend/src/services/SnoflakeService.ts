import { executeQuery } from './APIService';

export async function executeSnowflakeQuery(query: string): Promise<any> {
  return executeQuery(query, 'snowflake');
}
