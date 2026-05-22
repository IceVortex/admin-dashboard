"use client"

import { useState } from "react"

import LoginModal from "@/components/ui/modals/LoginModal/LoginModal"
import { useExploreDemo } from "@/hooks/useExploreDemo"

import styles from "./LoginActions.module.css"

export default function LoginActions() {
    const [showLogin, setShowLogin] = useState(false)

    const { isLoadingDemo, onExploreDemo } = useExploreDemo()

    return (
        <>
            <div className={styles.actions}>
                <button className={styles.primaryBtn}
                    onClick={() => setShowLogin(true)}
                >
                    Sign In
                </button>

                <button className={styles.secondaryBtn}
                    onClick={onExploreDemo}
                    disabled={isLoadingDemo}
                >
                    { isLoadingDemo ? "Loading..." : "Explore Demo"}
                </button>
            </div>

            <LoginModal
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
            />
        </>
    )
}