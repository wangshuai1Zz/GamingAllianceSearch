import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a custom Axios instance
const api: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 5000, // Set a timeout value if needed
});

// Define a custom response interface
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Define your API methods
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response: AxiosResponse<ApiResponse<T>> = await api.get(url, config);
        return response.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response: AxiosResponse<ApiResponse<T>> = await api.post(url, data, config);
        return response.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Export the Axios instance for global usage
export default api;