import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  user: null,
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await data.json();

  return user;
});

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (userId) => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    const user = await data.json();

    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //
    builder.addCase(fetchUsers.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });

    //
    builder.addCase(fetchUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserById.rejected, (state: any, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export default userSlice.reducer;
