import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:5000/api'; 

interface ApiResponse<T> {
  data: T;
  status: number;
}

export async function executeQuery(query: string): Promise<ApiResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios.post(`${BASE_URL}/query`, { query });
    return { data: response.data, status: response.status };
  } catch (error: any) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function fetchDatabaseData(databaseType: string): Promise<ApiResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/database/${databaseType}`);
    return { data: response.data, status: response.status };
  } catch (error : any) {
    return { data: error.response.data, status: error.response.status };
  }
}

