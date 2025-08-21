import { api_login_end } from "@/api/api_url";
import apiInstance from "@/api/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define the shape of the login request data
interface LoginRequest {
  username: string;
  password: string;
}

// Define the shape of the response data
interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    // Add more fields based on your actual response
  };
}

// Define the shape of the slice state
interface LoginState {
  data: LoginResponse | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Async thunk with typing
export const LoginUser = createAsyncThunk<LoginResponse, LoginRequest>(
  "login/LoginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post<LoginResponse>(api_login_end, data);
      console.log("Login Response", response);
      return response.data;
    } catch (error: any) {
      console.error("Login Error", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial state
const initialState: LoginState = {
  data: null,
  loading: false,
  error: null,
  success: false,
};

// Slice
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(LoginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      console.log("Action for fulfilled", action);
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.success = true;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      console.log("Action for rejected", action);
      state.loading = false;
      state.data = null;
      state.error = action.payload as string || action.error.message || "Unknown error";
      state.success = false;
    });
  },
});

export default LoginSlice.reducer;
