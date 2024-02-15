import React from 'react'
import styles from './BackyardCardGrid.module.css'
import arrow from '/home/arrow-right-black.svg'
import getBackyardCards, {
	BackyardCardInterface,
} from './utils/getBackyardCards'

export type BackyardCardGridProps = {
	// types...
}

const BackyardCardGrid: React.FC<BackyardCardGridProps> = ({}) => {
	const cards = getBackyardCards()
	return (
		<div className={styles.container}>
			{cards.map((card, index) => (
				<BackyardCard {...card} key={index} />
			))}
		</div>
	)
}

export default BackyardCardGrid

const BackyardCard: React.FC<BackyardCardInterface> = ({
	title,
	preTitle,
	isImage,
	url,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.information}>
				<p className={styles.preTitle}>{preTitle}</p>
				<p className={styles.title}>
					{title} <img src={arrow} alt='' />
				</p>
			</div>
			{isImage ? (
				<img src={url} alt={title} className={styles.background} />
			) : (
				<video
					src={url}
					muted
					loop
					playsInline
					autoPlay
					className={styles.background}
				/>
			)}
		</div>
	)
}
