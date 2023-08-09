import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // not authenticated and autheticated
        errorMsg: null,
        uid: null,
        email: null,
        password: null,
        displayName: null,
        photoURL: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMsg = null;
        },
        logout: (state, action) => {
            state.status = 'not authenticated';
            state.uid = null;
            state.email = null;
            state.password = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMsg = action.payload;
        },
        checkingCredential: (state) => {
            state.status = 'checking'
        }
    }
});
export const { login, logout, checkingCredential } = authSlice.actions;