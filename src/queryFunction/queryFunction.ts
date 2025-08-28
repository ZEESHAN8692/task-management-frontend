import { api_create_project_end, api_delete_project_end, api_get_projects_end, api_get_single_project_end, api_login_end, api_profile_end, api_register_end, api_update_project_end } from "@/api/api_url";
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


// Project Routes 

export const createProject = async (projectData: any) => {
  try {
    const response = await apiInstance.post(api_create_project_end, projectData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllProjects = async () => {
  try {
    const response = await apiInstance.get(api_get_projects_end);
    return response;
  } catch (error) {
    throw error;
  }
};


export const getSingleProject = async (projectId: string) => {
  try {
    const response = await apiInstance.get(`${api_get_single_project_end}/${projectId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (projectId: string, projectData: any) => {
  try {
    const response = await apiInstance.put(`${api_update_project_end}/${projectId}`, projectData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const response = await apiInstance.delete(`${api_delete_project_end}/${projectId}`);
    return response;
  } catch (error) {
    throw error;
  }
};



