"use client"

import AddUserForm from "@/components/users/AddUserForm"
import UsersTable from "@/components/users/UsersTable"
import Pagination from "@/components/users/Pagination"

import { useUsersPage } from "@/hooks/useUsersPage"

import styles from "./UsersPage.module.css"

export default function UsersPage() {
    const {
        paginatedUsers,
        currentUser,
        newName,
        setNewName,
        newEmail,
        setNewEmail,
        emailError,
        currentPage,
        totalPages,
        handleAddUser,
        setCurrentPage
    } = useUsersPage()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Users</h1>
            </div>

            <AddUserForm
                newName={newName}
                setNewName={setNewName}
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                onAddUser={handleAddUser}
                emailError={emailError}
            />

            <UsersTable
                users={paginatedUsers}
                currentUser={currentUser}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}