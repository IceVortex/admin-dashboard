import styles from "./AnalyticsCard.module.css"

interface AnalyticsCardProps {
    title: string
    value: string | number
    highlight?: boolean
}

export default function AnalyticsCard({ title, value, highlight }: AnalyticsCardProps) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>

            <p className={ highlight ? styles.highlight : "" }>
                {value}
            </p>
        </div>
    );
}