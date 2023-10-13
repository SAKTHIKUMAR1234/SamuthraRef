import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create_User, fetch_get } from "../utils";


//create action

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      console.log("--1--send---", data)
      const response = await create_User("http://localhost:8080/api/v1/userdetails/newUser", data)
      console.log("------2--send--")
      return response;
    } catch (error) {
      console.log("---3--send--")
      return rejectWithValue(error);
    }
  }
);

//read action
export const getUser = createAsyncThunk(
  "getUser",
  async (userId, { rejectWithValue }) => {
    console.log("---1--read--")
    try {
      console.log("----2-read--")
      const response = await fetch_get(`http://localhost:8080/api/v1/userdetails/getUser/${userId}`)

      return response
    } catch (error) {
      console.log("--error-read---")

      return rejectWithValue(error)
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("---1-put---")
    try {
      const response = await fetch_get("---put-api-----")

      console.log("----2-put--")

      return response
    } catch (error) {
      console.log("--error-put---")

      return rejectWithValue(error)
    }
  }
)


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    user_data: [],

  },
  reducers: {
    userDetails: (state, action) => {
      return { ...state, users: action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })

    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user_data = action.payload;
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user_data = action.payload;
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })


  },
});

export const { userDetails } = userDetail.actions;

export default userDetail.reducer;


