import React from 'react'
import styles from './Hero.module.css'

export type HeroProps = {
	// types...
}

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<div className={styles.container}>
			<Title />
			<div className={styles.information}>
				<p className={styles.informationTitle}>
					We handle everythin, from permits to installation.
				</p>
				<p className={styles.available}>Available now in California</p>
				<p className={styles.notIn}>
					Not in California?{' '}
					<span className={styles.tellUs}>Tell us where to build next</span>
				</p>
			</div>
		</div>
	)
}

export default Hero

const Title = () => {
	return (
		<h1 className={styles.title}>
			Backyard
			<div className={styles.introElevation}>
				<img
					src='/home/hero/intro-studio-800.webp'
					alt='Dark bronze studio Backyard'
				/>
			</div>
			<br className={styles.mobile} />
			is the
			<br />
			super simple,
			<br className={styles.mobile} />
			<div className={styles.FirstIntroElevationMobile}>
				<img
					src='/home/hero/intro-onebed-800.webp'
					alt='Bone white one bedroom Backyard'
				/>
			</div>
			smartly
			<br className={styles.mobile} />
			<br />
			customizable,
			<br className={styles.mobile} />
			<div className={styles.FirstIntroElevationDesktop}>
				<img
					src='/home/hero/intro-onebed-800.webp'
					alt='Bone white one bedroom Backyard'
				/>
			</div>
			all-new
			<br />
			<div className={styles.SecondnItroElevationMobile}>
				<img
					src='/home/hero/intro-twobed-800.webp'
					alt='Evergreen two bedroom Backyard'
				/>
			</div>
			<br className={styles.mobile} />
			ADU
			<div className={styles.SecondIntroElevationDesktop}>
				<img
					src='/home/hero/intro-twobed-800.webp'
					alt='Evergreen two bedroom Backyard'
				/>
			</div>{' '}
			from Samara.
		</h1>
	)
}
