import React, { useEffect, useState } from 'react'
import styles from './TechSpecs.module.css'
import getSpecs from './utils/getSpecs'
import { getPlansDesktop, getPlansMobile } from './utils/getPlans'
import outside from '/specs/green-2880.webp'
export type TechSpecsProps = {
	// types...
}

const TechSpecs: React.FC<TechSpecsProps> = ({}) => {
	const names = ['Studio', 'One bedroom', 'Two bedroom']
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
			<h1 className={styles.title}>Tech specs</h1>
			<div className={styles.header}>
				<div className={styles.standar}></div>
				<p className={styles.standar}>Studio</p>
				<p className={styles.standar}>One bedroom</p>
				<p className={styles.standar}>Two bedroom</p>
			</div>
			<RowsOfImages names={names} />
			<Specs names={names} />
			{/*  */}
			{isMobile ? <PlanContainerMobile /> : <PlanContainerDesktop />}
			<div className={styles.outside}>
				<img src={outside} alt='' />
			</div>
		</div>
	)
}

export default TechSpecs

const Specs = ({ names }: { names: string[] }) => {
	const specs = getSpecs()
	return (
		<>
			{specs.map((row, index) => (
				<div className={styles.rowOfText} key={index}>
					{row.row.map((specs, indexSpecs) => (
						<div className={styles.standar} key={indexSpecs}>
							<p className={`${styles.mobile} ${styles.name}`}>
								{names[indexSpecs - 1]}
							</p>
							<p className={styles.information}>{specs.information}</p>
							{specs.clarification ? (
								<p className={styles.clarification}>{specs.clarification}</p>
							) : (
								''
							)}
						</div>
					))}
				</div>
			))}
		</>
	)
}

const RowsOfImages = ({ names }: { names: string[] }) => {
	const images = [
		'/specs/header-studio.webp',
		'/specs/header-onebed.webp',
		'/specs/header-twobed.webp',
	]

	return (
		<div className={styles.rowOfImages}>
			<div className={styles.standar}>
				<p className={styles.mobile}>Models</p>
			</div>
			{images.map((url, index) => (
				<div className={styles.standar} key={index}>
					<p className={`${styles.mobile} ${styles.name}`}>{names[index]}</p>
					<img src={url} alt='' className={styles.imageOnRow} />
				</div>
			))}
		</div>
	)
}
const PlanContainerDesktop = () => {
	const plans = getPlansDesktop()
	return (
		<div className={styles.rowOfImages}>
			<div className={styles.standar}>
				<p className={styles.information}>Floorplans</p>
				<p className={styles.clarification}>Stairs and decks not represented</p>
				<p className={styles.dimensioned}>Dimensioned plans</p>
			</div>
			{plans.map((plan, index) => (
				<div className={styles.planContainer} key={index}>
					<div className={styles.relative}>
						<div className={styles.height}>
							<div>{plan.height}</div>
						</div>
						<img src={plan.url} alt='' className={styles.planImage} />
						<div className={styles.width}>
							<div>{plan.width}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

const PlanContainerMobile = () => {
	const plans = getPlansMobile()
	return (
		<div className={styles.rowOfImages}>
			<div className={styles.standar}>
				<p className={styles.information}>Floorplans</p>
				<p className={styles.clarification}>Stairs and decks not represented</p>
				<p className={styles.dimensioned}>Dimensioned plans</p>
			</div>
			{plans.map((plan, index) => (
				<div className={styles.planContainer} key={index}>
					<div className={styles.relative}>
						<div className={styles.height}>
							<div>{plan.height}</div>
						</div>
						<img src={plan.url} alt='' className={styles.planImage} />
						<div className={styles.width}>
							<div>{plan.width}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
