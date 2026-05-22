"use client"

import { useState } from "react"

import { handleExploreDemo } from "@/api/demo/explore"

import { useErrorPopup } from "@/components/ui/popups/ErrorPopupProvider"

export function useExploreDemo() {
    const { showError } = useErrorPopup()

    const [ isLoadingDemo, setIsLoadingDemo ] = useState(false)

    const onExploreDemo =
        async () => {
            if (isLoadingDemo) return

            setIsLoadingDemo(true)

            try {
                const response = await handleExploreDemo()
                const data = await response.json()

                if (!response.ok) {
                    showError(data.error ?.message || "Failed to fetch demo data.")
                }

            } catch {
                showError("An error occurred while fetching demo data.")

            } finally {
                setIsLoadingDemo(false)
            }
        }

    return { isLoadingDemo, onExploreDemo }
}