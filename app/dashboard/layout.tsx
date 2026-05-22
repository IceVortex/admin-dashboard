import Header from "@/components/layout/Header/Header"
import Sidebar from "@/components/layout/Sidebar/Sidebar"
import Footer from "@/components/layout/Footer/Footer"

import "@/app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
        <>
            <Header />

            <div className="content-wrapper">
                <Sidebar />

                <main className="main-content">
                    {children}
                </main>
            </div>

            <Footer />
        </>
	)
}