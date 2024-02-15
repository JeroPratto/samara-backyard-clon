import { useState } from 'react'
import styles from './QualitiDropDown.module.css'

interface QualitiDropDownProps {
	title: string
	desc: string
	information: string[]
	bgColor: string
	maintextColor: string
	secondTextColor: string
}
const QualitiDropDown: React.FC<QualitiDropDownProps> = ({
	title,
	desc,
	information,
	bgColor,
	maintextColor,
	secondTextColor,
}) => {
	const [open, setOpen] = useState(false)
	const toggleState = () => setOpen((state) => !state)
	return (
		<div
			className={styles.container}
			onClick={toggleState}
			style={{ backgroundColor: bgColor, color: maintextColor }}
		>
			<div className={styles.titleAndDesc}>
				<p className={styles.title}>{title}</p>
				<p className={styles.desc} style={{ color: secondTextColor }}>
					{desc}
				</p>
			</div>
			<p className={`${styles.details} ${open ? styles.open : ''}`}>
				Details
				<div className={styles.icon}>
					<div
						className={styles.first}
						style={{ backgroundColor: maintextColor }}
					></div>
					<div
						className={styles.second}
						style={{ backgroundColor: maintextColor }}
					></div>
				</div>
			</p>
			<ul className={`${styles.list} ${open ? styles.open : ''}`}>
				<div>
					{information.map((item, index) => (
						<li className={styles.item} key={index}>
							{item}
						</li>
					))}
				</div>
			</ul>
		</div>
	)
}

export default QualitiDropDown
