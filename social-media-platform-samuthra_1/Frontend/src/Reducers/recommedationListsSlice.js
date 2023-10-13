import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch_get } from "../utils";

//read action
export const  recommendedUser = createAsyncThunk(
    "getUser",
    async (userId,{ rejectWithValue }) => {
      console.log("---1--recmmend--")
      try {
      const response = await fetch_get(`http://localhost:8080/api/v1/recommendedUsers/${userId}`)
      console.log("----2-read--")
        const result = await response.json()
        console.log("--3--recommend-",result)
  
        return result
      } catch (error) {
        console.log("--error-recommed---")
  
        return rejectWithValue(error)
      }
    }
  );



export const recommendationList = createSlice({
    name: "recommendationList",
    initialState: {
        user_suggestion:[],
      loading: false,
      error: null,
  
    },
    reducers: {
      recommendationLists:(state,action) => {
        return {...state,user_suggestion:action.payload}
      }
    },
    extraReducers: (builder) =>{
      
      builder.addCase(recommendedUser.pending ,(state) => {
        state.loading = true;
      })
      builder.addCase(recommendedUser.fulfilled , (state, action) => {
        state.loading = false;
        state.user_suggestion = action.payload;
      })
      builder.addCase(recommendedUser.rejected , (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

    },
});

export const {recommendationLists} = recommendationList.actions;

export default recommendationList.reducer;

