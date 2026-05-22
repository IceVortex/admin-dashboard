import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { users as initialUsers } from "@/data/users"

export type User = {
    id: number
    name: string
    email: string
};

interface UsersState {
    users: User[]
}

const initialState: UsersState = {
    users: initialUsers
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },

        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(
                user => user.id !== action.payload
            )
        },

        editUsername: (state, action: PayloadAction<{id: number; name: string;}>) => {
            const user = state.users.find(
                user => user.id === action.payload.id
            )

            if (user) {
                user.name = action.payload.name
            }
        }
    }
})

export const {
    addUser,
    deleteUser,
    editUsername,
} = usersSlice.actions

export default usersSlice.reducer