/**
 * HTTP client — single entry point for all API calls using Axios.
 *
 * Reads the API base URL from the environment variable VITE_API_URL.
 * During development without a backend, this will be an empty string
 * and all requests will go to the Vite dev server.
 *
 * Usage:
 *   import { httpClient } from "@/services/httpClient";
 *   const data = await httpClient.post("/contact", payload);
 */
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL ?? "";

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpClient = {
  get: <T>(path: string): Promise<T> => 
    apiInstance.get<T>(path).then((res) => res.data),
    
  post: <T>(path: string, body: unknown): Promise<T> => 
    apiInstance.post<T>(path, body).then((res) => res.data),
    
  put: <T>(path: string, body: unknown): Promise<T> => 
    apiInstance.put<T>(path, body).then((res) => res.data),
    
  patch: <T>(path: string, body: unknown): Promise<T> => 
    apiInstance.patch<T>(path, body).then((res) => res.data),
    
  delete: <T>(path: string): Promise<T> => 
    apiInstance.delete<T>(path).then((res) => res.data),
};
export default apiInstance;
