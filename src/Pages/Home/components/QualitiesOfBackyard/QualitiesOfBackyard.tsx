import React from 'react'
import styles from './QualitiesOfBackyard.module.css'
import { ABetterFuture } from './components/ABetterFuture'
import QualitiDropDown from './components/QualitiDropDown/QualitiDropDown'
import highPerformance from '/home/qualities/bg-high-performance.jpg'
import airPurification from '/home/qualities/bg-air-purification.jpg'
import zeroSolar from '/home/qualities/bg-net-zero-solar.jpg'
import getQualities from './components/utils/getQualities'

export type QualitiesOfBackyardProps = {
	// types...
}

const QualitiesOfBackyard: React.FC<QualitiesOfBackyardProps> = ({}) => {
	const qualities = getQualities()
	return (
		<div className={styles.container}>
			<ABetterFuture />
			<div className={styles.sectionContainer}>
				<img src={highPerformance} alt='' className={styles.bgSection} />
				<QualitiDropDown {...qualities[0]} />
			</div>
			<div className={styles.twoSections}>
				<div className={styles.halfSection}>
					<img src={airPurification} alt='' className={styles.bgSection} />
					<QualitiDropDown {...qualities[1]} />
				</div>
				<div className={styles.halfSection}>
					<img src={zeroSolar} alt='' className={styles.bgSection} />
					<QualitiDropDown {...qualities[2]} />
				</div>
			</div>
		</div>
	)
}

export default QualitiesOfBackyard
