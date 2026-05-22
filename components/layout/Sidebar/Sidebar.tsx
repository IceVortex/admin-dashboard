"use client"

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { dashboardNavItems } from "@/data/navigation"

import styles from "./Sidebar.module.css"

export default function Sidebar() {
    const pathname = usePathname()

    const [open, setOpen] = useState(false)

    return (
        <>
            <button className={styles.menuButton}
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : "" }`}>
                <nav>
                    <ul>
                        { dashboardNavItems.map(item => (
                            <li key={item.href}>
                                <Link href={item.href}
                                    className={`${styles.link} ${pathname === item.href ? styles.active : "" }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )) }
                    </ul>
                </nav>
            </aside>
        </>
    )
}