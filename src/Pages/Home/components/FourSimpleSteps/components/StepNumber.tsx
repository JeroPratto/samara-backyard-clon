import { ReactNode } from 'react'
import styles from './styles/Step.module.css'

const StepNumber = ({
	children,
	black,
	title,
}: {
	children: ReactNode
	black: boolean
	title: string
}) => {
	return (
		<div className={styles.numberContainer}>
			<p className={`${styles.number} ${black ? styles.black : styles.white}`}>
				{children}
			</p>
			<p className={styles.title}>{title}</p>
		</div>
	)
}
export default StepNumber
