import React from 'react'
import styles from './UnlockPotential.module.css'
import getLogos from './utils/getLogos'
import video from '/home/videoCard.mp4'

export type UnlockPotentialProps = {
	// types...
}

const UnlockPotential: React.FC<UnlockPotentialProps> = ({}) => {
	const logos = getLogos()
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Live in it.
				<br className={styles.mobile} /> Work in it.
				<br className={styles.mobile} /> Rent it out.
			</h2>
			<p className={styles.desc}>
				Open new doors <br className={styles.mobile} /> with Backyard.
			</p>
			<div className={styles.asSeenIn}>
				<p>As seen in:</p>
				<div className={styles.logos}>
					{logos.map((logo) => (
						<img src={logo.url} alt={logo.name} key={logo.url} />
					))}
				</div>
			</div>
			<div className={styles.cardContainer}>
				<ImageCard />
				<VideoCard />
			</div>
		</div>
	)
}

export default UnlockPotential

const ImageCard = () => {
	return (
		<div className={styles.imageCard}>
			<p className={styles.information}>
				<span>Experience Backyard in person.</span>
				<br />
				Visit a showroom
			</p>
		</div>
	)
}
const VideoCard = () => {
	return (
		<div className={styles.videoCard}>
			<p className={styles.information}>
				<span>Learn how we squeeze a whole house into your yard.</span>
				<br />
				How it works
			</p>
			<video src={video} muted loop playsInline autoPlay />
		</div>
	)
}
