const base_url: string = "http://localhost:4000"

// routes.ts

const api_register_end: string = "/api/register";
const api_login_end: string = "/api/login";
const api_profile_end: string = "/api/profile";
const api_members_end: string = "/api/members";

// Project routes
const api_create_project_end: string = "/api/create-project";
const api_get_projects_end: string = "/api/projects";
const api_get_single_project_end: string = "/api/single-project";
const api_get_project_members_end: string = "/api/projects";
const api_update_project_end: string = "/api/update-project";
const api_delete_project_end: string = "/api/delete-project";

// Task routes
const api_create_task_end: string = "/api/projects";
const api_get_tasks_by_project_end: string = "/api/projects";
const api_get_tasks_progress: string = "/api/api_get_tasks_progress";
const api_get_tasks_by_admin_end: string = "/api/admin/tasks"
const api_get_task_create_by_end:string="/api/tasks/create-by"
const api_get_task_by_id_end: string = "/api/tasks";
const api_update_task_end: string = "/api/tasks";
const api_delete_task_end: string = "/api/tasks";
const api_move_task_end: string = "/api/tasks";

// Admin routes
const api_create_user_end: string = "/api/admin/create-user";
const api_update_user_end: string = "/api/admin/users";
const api_get_all_users_end: string = "/api/admin/users";
const api_get_single_user_end: string = "/api/admin/users";
const api_delete_user_end: string = "/api/admin/users";

// Column management routes
const api_get_columns_end: string = "/api/admin/columns";
const api_create_column_end: string = "/api/admin/columns";
const api_update_column_end: string = "/api/admin/columns/:id";
const api_delete_column_end: string = "/api/admin/columns/:id";

export {
  base_url,
  api_register_end,
  api_login_end,
  api_profile_end,
  api_members_end,
  api_create_project_end,
  api_get_projects_end,
  api_get_single_project_end,
  api_get_project_members_end,
  api_update_project_end,
  api_delete_project_end,
  api_create_task_end,
  api_get_tasks_by_project_end,
  api_get_tasks_by_admin_end,
  api_get_task_create_by_end,
  api_get_tasks_progress,
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