"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { useAppDispatch } from "@/hooks/useAppDispatch"

import { login } from "@/redux/features/authSlice"
import { handleLogin } from "@/api/auth/login"

export function useLoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const dispatch = useAppDispatch()
    const router = useRouter()

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email || !password) {
            return
        }

        setError("")
        setLoading(true)

        try {
            const data = await handleLogin({ email, password })

            dispatch(login(data.user))

            document.cookie = "authenticated=true; path=/"

            localStorage.setItem("user", JSON.stringify(data.user))

            router.push("/dashboard/users")

        } catch (error) {
            setError(error instanceof Error ? error.message : "Something went wrong.")
            setPassword("")

        } finally {
            setLoading(false)
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        error,
        onSubmit
    }
}