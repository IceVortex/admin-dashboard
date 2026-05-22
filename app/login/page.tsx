import LoginActions from "@/components/login/LoginActions"

import styles from "./page.module.css"

export default function LoginPage() {
    return (
        <div className={styles.landingPage}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Welcome, what would you like to do today?
                    </h1>

                    <p className={styles.subtitle}>
                        Access your dashboard, manage your workspace, or explore the platform.
                    </p>

                    <LoginActions />
                </div>
            </div>
        </div>
    )
}