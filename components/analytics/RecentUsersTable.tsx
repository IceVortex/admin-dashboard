import styles from "./RecentUsersTable.module.css"

interface User {
    id: number
    name: string
    email: string
}

interface RecentUsersTableProps {
    users: User[]
}

export default function RecentUsersTable({ users }: RecentUsersTableProps) {
    return (
        <div className={styles.recentUsers}>
            <div className={styles.sectionHeader}>
                <h2>Recent Users</h2>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}