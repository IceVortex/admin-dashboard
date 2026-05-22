import styles from "./Pagination.module.css"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className={styles.pagination}>
            <button className={styles.pageBtn}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            <span className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
            </span>

            <button className={styles.pageBtn}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    )
}