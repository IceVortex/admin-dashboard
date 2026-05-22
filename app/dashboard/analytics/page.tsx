"use client"

import { useAnalytics } from "@/hooks/useAnalytics"

import AnalyticsStats from "@/components/analytics/AnalyticsStats"
import RecentUsersTable from "@/components/analytics/RecentUsersTable"

import styles from "./AnalyticsPage.module.css"

export default function AnalyticsPage() {
    const { totalUsers, recentUsers } = useAnalytics()

    return (
        <div className={styles.container}>
            <div className={styles.header}>

                <h1>Analytics Overview</h1>

                <p>Monitor platform activity and recent users.</p>

            </div>

            <AnalyticsStats totalUsers={totalUsers} />

            <RecentUsersTable users={recentUsers} />
        </div>
    )
}