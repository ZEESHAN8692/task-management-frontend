import { api_create_project_end, api_create_task_end, api_create_user_end, api_delete_project_end, api_delete_task_end, api_delete_user_end, api_get_all_users_end, api_get_project_members_end, api_get_projects_end, api_get_single_project_end, api_get_single_user_end, api_get_tasks_by_admin_end, api_get_tasks_by_project_end, api_get_tasks_progress, api_login_end, api_members_end, api_move_task_end, api_profile_end, api_register_end, api_update_project_end, api_update_task_end, api_update_user_end } from "@/api/api_url";
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

export const getMembers = async () => {
  try {
    const response = await apiInstance.get(api_members_end);
    return response;
  } catch (error) {
    throw error;
  }
}


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

export const getProjectMembers = async (projectId: string) => {
  try {
    const response = await apiInstance.get(`${api_get_project_members_end}/${projectId}/members`);
    return response;
  } catch (error) {
    throw error;
  }
}

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



// Task Apis

// Create Task
export const createTask = async (projectId: string, taskData: any) => {
  try {
    const endpoint = `${api_create_task_end}/${projectId}/tasks`;
    const response = await apiInstance.post(endpoint, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// router.get("/tasks/progress/:projectId",AuthCheck, taskController.getTaskProgress);

export const getTaskProgress = async (projectId: string) => {
  try {
    const endpoint = `${api_get_tasks_progress}/${projectId}`;
    const response = await apiInstance.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// Get all tasks by project
export const getTasksByProject = async (projectId: string) => {
  try {
    const endpoint = `${api_get_tasks_by_project_end}/${projectId}/tasks`;
    const response = await apiInstance.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Task Count By Admin 
export const getTasksCountByAdmin = async () => {
  try {
    
    const response = await apiInstance.get(api_get_tasks_by_admin_end);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Get single task by ID
export const getTaskById = async (taskId: string) => {
  try {
    const endpoint = `${api_get_tasks_by_project_end}/${taskId}`;
    const response = await apiInstance.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update Task
export const updateTask = async (taskId: string, taskData: any) => {
  try {
    const endpoint = `${api_update_task_end}/${taskId}`;
    const response = await apiInstance.put(endpoint, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Task
export const deleteTask = async (taskId: string) => {
  try {
    const endpoint = `${api_delete_task_end}/${taskId}`; 
    const response = await apiInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Move Task (e.g., to another column/status)
export const moveTask = async (taskId: string, moveData: any) => {
  try {
    const endpoint = `${api_move_task_end}/${taskId}/move`;
    const response = await apiInstance.patch(endpoint, moveData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Admin Api Call 

// Create User
export const createUser = async (userData: any) => {
  try {
    const response = await apiInstance.post(api_create_user_end, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update User
export const updateUser = async (userId: string, updateData: any) => {
  try {
    const endpoint = `${api_update_user_end}/${userId}`;
    const response = await apiInstance.put(endpoint, updateData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    const response = await apiInstance.get(api_get_all_users_end);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Single User
export const getSingleUser = async (userId: string) => {
  try {
    const endpoint = `${api_get_single_user_end}/${userId}`;
    const response = await apiInstance.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete User
export const deleteUser = async (userId: string) => {
  try {
    const endpoint = `${api_delete_user_end}/${userId}`;
    const response = await apiInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};


