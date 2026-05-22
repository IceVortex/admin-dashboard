"use client"

import Image from "next/image"

import { useHeaderAuth } from "@/hooks/useHeaderAuth"

import styles from "./Header.module.css"

export default function Header() {
    const { user, hydrated, handleLogout } = useHeaderAuth()

    return (
        <header className={styles.header}>
            <Image src="/admin_dashboard_logo.svg"
                alt="Logo"
                width={120}
                height={40}
                priority
            />

            { hydrated && (
                <div className={styles.rightSection}>
                    <p className={styles.greeting}>
                        Hi, {user?.name || "Guest"}
                    </p>

                    <button className={styles.logoutBtn}
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            )}
        </header>
    )
}