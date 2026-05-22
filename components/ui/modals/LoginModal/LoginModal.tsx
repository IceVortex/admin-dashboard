"use client"

import { useLoginForm } from "@/hooks/useLoginForm"

import styles from "./LoginModal.module.css"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        error,
        onSubmit
    } = useLoginForm()

    return (
        <div className={`${styles.modalOverlay} ${ isOpen ? styles.showModal : "" }`}
            onClick={onClose}
        >
            <div className={styles.modal}
                onClick={e => e.stopPropagation()}
            >
                <button className={styles.closeBtn}
                    onClick={onClose}
                >
                    ✕
                </button>

                <form className={styles.loginForm}
                    onSubmit={onSubmit}
                >
                    <h2>Sign In</h2>

                    <div className={styles.formGroup}>
                        <label>Email</label>

                        <input type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Password</label>

                        <input type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    { error && (
                        <p className={styles.errorMessage}>
                            {error}
                        </p>
                    ) }

                    <button type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                    >
                        { loading ? "Signing In..." : "Continue"}
                    </button>
                </form>
            </div>
        </div>
    )
}