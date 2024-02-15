import React, { useState } from 'react'
import styles from './YourMainHome.module.css'
import studio from '/home/yourMainHome/interior-studio.webp'
import room from '/home/yourMainHome/living-room.webp'
import twobed from '/home/yourMainHome/interior-twobed.webp'

export type YourMainHomeProps = {
	// types...
}

const YourMainHome: React.FC<YourMainHomeProps> = ({}) => {
	const [current, setCurrent] = useState(0)
	const changeCurrent = () => {
		if (current === 2) setCurrent(0)
		else setCurrent((cur) => cur + 1)
	}
	return (
		<div className={styles.container}>
			<div className={styles.imagesContainer}>
				<button
					onClick={changeCurrent}
					className={styles.totalBtn}
					aria-label='Change Image'
				></button>
				<h3 className={styles.title}>
					Your main <br /> home might <br /> get jealous
				</h3>
				<img
					src={studio}
					alt=''
					className={current === 0 ? styles.current : ''}
				/>
				<img
					src={room}
					alt=''
					className={current === 1 ? styles.current : ''}
				/>
				<img
					src={twobed}
					alt=''
					className={current === 2 ? styles.current : ''}
				/>
				<div className={styles.btnContainer}>
					<button
						onClick={() => setCurrent(0)}
						className={current === 0 ? styles.current : ''}
					>
						Studio
					</button>
					<button
						onClick={() => setCurrent(1)}
						className={current === 1 ? styles.current : ''}
					>
						1B
					</button>
					<button
						onClick={() => setCurrent(2)}
						className={current === 2 ? styles.current : ''}
					>
						2B
					</button>
				</div>
			</div>
		</div>
	)
}

export default YourMainHome
