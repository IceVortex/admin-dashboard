import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
    id: number
    email: string
    name: string
}

interface AuthState {
    isAuthenticated: boolean
    user: User | null
    hydrated: boolean
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    hydrated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true
            state.user = action.payload
        },

        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
        },

        hydrateAuth: ( state, action: PayloadAction<User | null>) => {
            state.isAuthenticated = !!action.payload
            state.user = action.payload
            state.hydrated = true
        }
    }
})

export const { login, logout, hydrateAuth } = authSlice.actions

export default authSlice.reducer