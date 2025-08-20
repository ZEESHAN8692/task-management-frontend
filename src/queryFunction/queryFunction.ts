import { api_login_end } from "@/api/api_url";
import apiInstance from "@/api/axiosInstance";

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await apiInstance.post(api_login_end, data);
    return response;
  } catch (error) {
    throw error;
  }
};

