import React from 'react'
import styles from './ABetterFuture.module.css'
import getCardsFuture from './utils/getCardsFuture'
import bgFuture from '/home/qualities/bg-future.jpg'

export type ABetterFutureProps = {
	// types...
}

const ABetterFuture: React.FC<ABetterFutureProps> = ({}) => {
	const cards = getCardsFuture()
	return (
		<div className={styles.container}>
			<img src={bgFuture} alt='' className={styles.bgFuture} />
			<div className={styles.titleAndDesc}>
				<h3 className={styles.title}>
					A better future <br /> starts in your <br /> own Backyard.
				</h3>
				<p className={styles.desc}>
					Backyard is designed for a better tomorrow. Thanks to top-tier energy
					efficiency and optional solar arrays, Backyard cuts your dependence on
					the grid. Think of it as design with purpose — good for you, great for
					the planet.
				</p>
				dimg
			</div>
			<div className={styles.cardsContainer}>
				{cards.map((card, index) => (
					<FutureCards {...card} key={index} />
				))}
			</div>
		</div>
	)
}

export default ABetterFuture

export interface FutureCard {
	urlImg: string
	title: string
	desc: string
}
export const FutureCards: React.FC<FutureCard> = ({ urlImg, title, desc }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageAndTitle}>
				<img src={urlImg} alt={title} />
				<p>{title}</p>
			</div>
			<p className={styles.descCard}>{desc}</p>
		</div>
	)
}
