"use client"

import { Provider } from "react-redux"

import { store } from "@/redux/store"
import { ErrorPopupProvider } from "@/components/ui/popups/ErrorPopupProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ErrorPopupProvider>
                {children}
            </ErrorPopupProvider>
        </Provider>
    )
}