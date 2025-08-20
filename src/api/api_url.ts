const base_url: string = "http://localhost:4000"

// routes.ts

const api_register_end: string = "/api/register";
const api_login_end: string = "/api/login";

// Project routes
const api_create_project_end: string = "/api/create-project";
const api_get_projects_end: string = "/api/projects";
const api_get_single_project_end: string = "/api/single-project/:id";
const api_update_project_end: string = "/api/update-project/:id";
const api_delete_project_end: string = "/api/delete-project/:id";

// Task routes
const api_create_task_end: string = "/api/projects/:projectId/tasks";
const api_get_tasks_by_project_end: string = "/api/projects/:projectId/tasks";
const api_get_task_by_id_end: string = "/api/tasks/:id";
const api_update_task_end: string = "/api/tasks/:id";
const api_delete_task_end: string = "/api/tasks/:id";
const api_move_task_end: string = "/api/tasks/:id/move";

// Admin routes
const api_create_user_end: string = "/api/admin/create-user";
const api_update_user_end: string = "/api/admin/users/:id";
const api_get_all_users_end: string = "/api/admin/users";
const api_get_single_user_end: string = "/api/admin/users/:id";
const api_delete_user_end: string = "/api/admin/users/:id";

// Column management routes
const api_get_columns_end: string = "/api/admin/columns";
const api_create_column_end: string = "/api/admin/columns";
const api_update_column_end: string = "/api/admin/columns/:id";
const api_delete_column_end: string = "/api/admin/columns/:id";

export {
  base_url,
  api_register_end,
  api_login_end,
  api_create_project_end,
  api_get_projects_end,
  api_get_single_project_end,
  api_update_project_end,
  api_delete_project_end,
  api_create_task_end,
  api_get_tasks_by_project_end,
  api_get_task_by_id_end,
  api_update_task_end,
  api_delete_task_end,
  api_move_task_end,
  api_create_user_end,
  api_update_user_end,
  api_get_all_users_end,
  api_get_single_user_end,
  api_delete_user_end,
  api_get_columns_end,
  api_create_column_end,
  api_update_column_end,
  api_delete_column_end,
};