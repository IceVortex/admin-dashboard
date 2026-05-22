"use client"

import { createContext, useContext, useState, ReactNode } from "react"

import styles from "./ErrorPopup.module.css"

type ErrorContextType = {
    showError: (message: string) => void
}

const ErrorPopupContext = createContext<ErrorContextType | null>(null)

export function ErrorPopupProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState("")

    const showError = (msg: string) => {
        setMessage(msg)
    }

    const closePopup = () => {
        setMessage("")
    }

    return (
        <ErrorPopupContext.Provider value={{ showError }}>
            {children}

            { message && (
                <div className={styles.popup}>
                    <div className={styles.content}>
                        <p>{message}</p>

                        <button className={styles.closeButton}
                            onClick={closePopup}
                        >
                            ×
                        </button>
                    </div>
                </div>
            ) }
        </ErrorPopupContext.Provider>
    )
}

export function useErrorPopup() {
    const context = useContext(ErrorPopupContext)

    if (!context) {
        throw new Error("useErrorPopup must be used inside ErrorPopupProvider")
    }

    return context
}