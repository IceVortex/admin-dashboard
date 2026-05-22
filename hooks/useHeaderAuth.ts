"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"

import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"

import { logout, hydrateAuth } from "@/redux/features/authSlice"

export function useHeaderAuth() {
    const dispatch = useAppDispatch()
    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
            dispatch(hydrateAuth(JSON.parse(storedUser)))
        } else {
            dispatch(hydrateAuth(null))
        }
    }, [dispatch])

    const { user, hydrated } = useAppSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())

        document.cookie = "authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"

        localStorage.removeItem("user")

        router.push("/login")
    }

    return { user, hydrated, handleLogout }
}