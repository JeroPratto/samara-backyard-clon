import React, { useEffect, useState } from 'react'
import styles from './FourSimpleSteps.module.css'
import StepNumber from './components/StepNumber'
import { StepImage, StepVideo } from './components/StepVideOrImage'
import getStepsInformation from './components/utils/getStepsInformation'
import designYours from '/home/designYours-icon.svg'

export type FourSimpleStepsProps = {
	// types...
}

const FourSimpleSteps: React.FC<FourSimpleStepsProps> = ({}) => {
	const [isMobile, setMobile] = useState(window.innerWidth <= 770)
	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 768)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<div className={styles.container}>
			<div className={styles.getBackyardContainer}>
				<h2 className={styles.getTitle}>
					Get Backyard in <br />
					four simple steps.
				</h2>
				<p className={styles.getDesc}>
					And in as few as <br /> seven months.
				</p>
			</div>
			{isMobile ? <MobileCarousel /> : <DesktopGrid />}
			<div className={styles.detailsContainer}>
				<div className={styles.titleAndDescDetail}>
					<p className={styles.titleDetail}>Want the details?</p>
					<p className={styles.descDetail}>
						Lean more about our fast, easy installation process.
					</p>
				</div>
				<div className={styles.btnContainer}>
					<button className={styles.howItWorks}>How it works</button>
					<button className={styles.design}>
						<img src={designYours} alt='' /> Design yours
					</button>
				</div>
			</div>
		</div>
	)
}

export default FourSimpleSteps

const DesktopGrid = () => {
	const steps = getStepsInformation()
	return (
		<>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[0].black} title={steps[0].title}>
					01
				</StepNumber>
				<StepImage src={steps[0].url} desc={steps[0].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[1].black} title={steps[1].title}>
					02
				</StepNumber>
				<StepVideo src={steps[1].url} desc={steps[1].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[2].black} title={steps[2].title}>
					03
				</StepNumber>
				<StepVideo src={steps[2].url} desc={steps[2].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[3].black} title={steps[3].title}>
					04
				</StepNumber>
				<StepImage src={steps[3].url} desc={steps[3].desc} />
			</div>
		</>
	)
}
const MobileCarousel = () => {
	const steps = getStepsInformation()
	return (
		<div className={styles.carousel}>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[0].black} title={steps[0].title}>
					01
				</StepNumber>
				<StepImage src={steps[0].url} desc={steps[0].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[1].black} title={steps[1].title}>
					02
				</StepNumber>
				<StepVideo src={steps[1].url} desc={steps[1].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[2].black} title={steps[2].title}>
					03
				</StepNumber>
				<StepVideo src={steps[2].url} desc={steps[2].desc} />
			</div>
			<div className={styles.stepContainer}>
				<StepNumber black={steps[3].black} title={steps[3].title}>
					04
				</StepNumber>
				<StepImage src={steps[3].url} desc={steps[3].desc} />
			</div>
		</div>
	)
}
