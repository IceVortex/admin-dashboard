"use client"

import { useAppSelector } from "@/hooks/useAppSelector"

export function useAnalytics() {
    const users = useAppSelector(state => state.users.users)
    const totalUsers = users.length

    const recentUsers = [...users].reverse().slice(0, 5)

    return { totalUsers, recentUsers }
}