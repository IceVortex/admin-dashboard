import UsersTableRow from "./UsersTableRow"

import styles from "./UsersTable.module.css"

interface User {
    id: number
    name: string
    email: string
}

interface UsersTableProps {
    users: User[]
    currentUser: {
        id: number
        email: string
        name: string
    } | null
}

export default function UsersTable({ users, currentUser }: UsersTableProps) {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map(user => (
                        <UsersTableRow
                            key={user.id}
                            user={user}
                            isCurrentUser={currentUser?.id === user.id}
                        />
                    )) }
                </tbody>
            </table>
        </div>
    )
}