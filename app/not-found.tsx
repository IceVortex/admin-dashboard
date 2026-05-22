import Link from "next/link"

import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>The page you are looking for does not exist or may have been moved.</p>

                <Link href="/" className={styles.button}>
                    Get me out of here
                </Link>
            </div>
        </div>
    )
}