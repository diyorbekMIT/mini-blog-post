import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    articles: [],
    error: null
}


const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticlesFailure: (state, payload) => {
            state.isLoading = false;
            state.error = payload
        }
    }
})

export const {getArticlesStart, getArticlesSuccess, getArticlesFailure} = articleSlice.actions;
export default articleSlice.reducer;