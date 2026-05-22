import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>© 2026 DashboardApp. All rights reserved.</p>

                <div className={styles.footerLinks}>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/support">Support</a>
                </div>
            </div>
        </footer>
    )
}