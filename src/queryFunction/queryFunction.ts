import { api_login_end, api_profile_end, api_register_end } from "@/api/api_url";
import apiInstance from "@/api/axiosInstance";

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await apiInstance.post(api_login_end, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (formData: FormData): Promise<any> => {
  try {
    const response = await apiInstance.post(api_register_end, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await apiInstance.get(api_profile_end);
    return response;
  } catch (error) {
    throw error;
  }
};
