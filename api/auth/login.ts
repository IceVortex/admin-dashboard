import { store } from "@/redux/store"

interface LoginPayload {
    email: string
    password: string
}

export async function handleLogin(
    { email, password}: LoginPayload
) {
    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    )

    const users = store.getState().users.users

    const user = users.find(
        user => user.email === email
    )

    if (!user) {
        throw new Error("Invalid credentials. Please try again.")
    }

    return {
        status: 200,
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }
}