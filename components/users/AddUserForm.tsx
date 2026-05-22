import styles from "./AddUserForm.module.css"

interface AddUserFormProps {
    newName: string
    setNewName: (value: string) => void
    newEmail: string
    setNewEmail: (value: string) => void
    onAddUser: () => void
    emailError: string
}

export default function AddUserForm({
    newName,
    setNewName,
    newEmail,
    setNewEmail,
    onAddUser,
    emailError
}: AddUserFormProps) {
    return (
        <>
            <div className={styles.addUser}>
                <input type="text"
                    placeholder="Name"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                />

                <input type="email"
                    placeholder="Email"
                    value={newEmail}
                    onChange={e =>setNewEmail(e.target.value)}
                />

                <button onClick={onAddUser}>
                    Add User
                </button>
            </div>

            { emailError && (
                <p className={styles.errorText}>
                    {emailError}
                </p>
            ) }
        </>
    );
}