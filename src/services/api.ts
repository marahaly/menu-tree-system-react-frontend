import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface ApiErrorResponse {
  message?: string;
}

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log("Request:", {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data,
  });

  return config;
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });

    return response;
  },
  (error: AxiosError) => {
    console.error("Error Response:", {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });

    return Promise.reject(error);
  }
);

const handleApiError = (error: AxiosError<ApiErrorResponse>): never => {
  const message = error.response?.data?.message || error.message || "Unknown error occurred";
  console.error("API Error:", message);
  throw new Error(message);
};

export interface Menu {
  id: string;
  menu_title: string;
  menu_no: number;
  menu_parent_no: number;
  depth: number;
  is_delete: number;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

export const getMenus = async (): Promise<Menu[]> => {
  try {
    const response = await apiClient.get<Menu[]>("/api/menu");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError<ApiErrorResponse>);
    throw error;
  }
};

export const getMenuById = async (id: string): Promise<Menu> => {
  try {
    const response = await apiClient.get<Menu>(`/api/menu/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError<ApiErrorResponse>);
    throw error;
  }
};
