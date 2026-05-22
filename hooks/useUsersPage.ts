"use client"

import { useState } from "react"

import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"

import { addUser } from "@/redux/features/usersSlice"

export function useUsersPage() {
    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.users.users)
    const currentUser = useAppSelector(state => state.auth.user)

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const USERS_PER_PAGE = 10

    const handleAddUser = () => {
        if (!newName || !newEmail) {
            return
        }

        setEmailError("")

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(newEmail)) {
            setEmailError("Please enter a valid email address.")

            return
        }

        dispatch(
            addUser({
                id: Date.now(),
                name: newName,
                email: newEmail
            })
        )

        setNewName("")
        setNewEmail("")

        const newTotalPages = Math.ceil(
            (users.length + 1) / USERS_PER_PAGE
        )

        setCurrentPage(newTotalPages)
    };

    const totalPages = Math.ceil(
        users.length / USERS_PER_PAGE
    )

    const startIndex = (currentPage - 1) * USERS_PER_PAGE

    const paginatedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE)

    return {
        users,
        currentUser,
        newName,
        setNewName,
        newEmail,
        setNewEmail,
        emailError,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedUsers,
        handleAddUser
    }
}