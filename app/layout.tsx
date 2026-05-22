import type { Metadata } from "next"

import Providers from "@/app/providers"

import "./globals.css"

export const metadata: Metadata = {
	title: "Admin Dashboard",
	description: "Manage users with ease."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="layout">
                <Providers>
                    {children}
                </Providers>
            </body>
		</html>
	)
}
