import AnalyticsCard from "./AnalyticsCard"

import styles from "./AnalyticsStats.module.css"

interface AnalyticsStatsProps {
    totalUsers: number
}

export default function AnalyticsStats({ totalUsers }: AnalyticsStatsProps) {
    return (
        <div className={styles.statsGrid}>
            <AnalyticsCard
                title="Total Users"
                value={totalUsers}
            />

            <AnalyticsCard
                title="Active Sessions"
                value="24"
            />

            <AnalyticsCard
                title="Projects"
                value="12"
            />

            <AnalyticsCard
                title="Server Status"
                value="Online"
                highlight
            />
        </div>
    )
}