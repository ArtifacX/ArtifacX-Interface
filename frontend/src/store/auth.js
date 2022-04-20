import {createSlice} from '@reduxjs/toolkit';

const initialAuthState ={isAuthenticated: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        toggleAuthState(state){
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
})

export default authSlice.reducer;
export const authActions = authSlice.actions; 