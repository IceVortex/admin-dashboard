"use client"

import { useAppDispatch } from "@/hooks/useAppDispatch"

import { deleteUser, editUsername } from "@/redux/features/usersSlice"

import styles from "./UsersTableRow.module.css"

interface User {
    id: number
    name: string
    email: string
}

interface UsersTableRowProps {
    user: User
    isCurrentUser: boolean
}

export default function UsersTableRow({ user, isCurrentUser }: UsersTableRowProps) {
    const dispatch = useAppDispatch()

    return (
        <tr>
            <td>{user.id}</td>
            <td>
                <input
                    className={styles.editInput}
                    value={user.name}
                    onChange={e =>
                        dispatch(
                            editUsername({
                                id: user.id,
                                name: e.target.value,
                            })
                        )
                    }
                />
            </td>
            <td>{user.email}</td>
            <td>
                <button className={styles.deleteBtn}
                    disabled={isCurrentUser}
                    title={isCurrentUser ? "Cannot delete currently logged in user" : ""}
                    onClick={() =>
                        dispatch(
                            deleteUser(
                                user.id
                            )
                        )
                    }
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}