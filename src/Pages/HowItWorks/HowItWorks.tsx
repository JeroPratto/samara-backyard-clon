import React from 'react'
import styles from './HowItWorks.module.css'

export type HowItWorksProps = {
	// types...
}

const HowItWorks: React.FC<HowItWorksProps> = ({}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>As easy as it gets.</h1>
			<p className={styles.subtitle}>
				From configuration to completion in as few as 7 months.
			</p>

			<ul className={styles.timeLine}>
				<Start />
				<SiteVisit />
				<SignOff />
				<Center />
				<SitePrep />
				<Transport />
				<CraneIn />
				<WrapUp />
				<Final />
			</ul>
			<div className={styles.party}></div>
		</div>
	)
}

export default HowItWorks

const Start = () => {
	return (
		<li className={`${styles.right} ${styles.start}`}>
			<h2 className={styles.titleItem}>Design yours</h2>
			<p className={styles.textItem}>
				Start by making Backyard yours. Choose your layout, colors, windows,
				doors, decks, interior, roof, and solar.
			</p>
			<p className={styles.textItem}>
				After you request a proposal, we kick off our remote property analysis.
			</p>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
		</li>
	)
}

const SiteVisit = () => {
	return (
		<li className={`${styles.left} ${styles.siteVisit}`}>
			<h2 className={styles.titleItem}>Site visit</h2>
			<p className={styles.textItem}>
				We’ll visit your property to prepare an installation estimate, ensuring
				your Backyard fits and noting any obstacles.
			</p>
			<div className={styles.time}>TWO WEEKS LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
		</li>
	)
}

const SignOff = () => {
	return (
		<li className={`${styles.right} ${styles.signOff}`}>
			<h2 className={styles.titleItem}>Sign off</h2>
			<p className={styles.textItem}>
				We'll send you a site plan, installation estimate, and solar proposal to
				review and approve.
			</p>
			<div className={styles.time}>ONE WEEK LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
		</li>
	)
}

const Center = () => {
	return (
		<li className={styles.center}>
			<h2 className={styles.titleItem}>Permit</h2>
			<p className={styles.textItem}>
				We’ll prepare and submit a formal permit package to your local planning
				department.
			</p>
			<div className={styles.time}>ONE WEEK LATER</div>
			<div className={styles.bullet}></div>
			<svg
				width='53'
				height='439'
				viewBox='0 0 53 439'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M50 436C50 436 50 281.9 50 219.5C50 192.976 46.5 175 41.4424 163.504M50 3.5V116C50 138.431 46.5 151 41.4424 163.504M41.4424 163.504C29.1216 135.5 3 144.927 3 162C3 179.073 29.5 188 41.4424 163.504Z'
					stroke='black'
					stroke-width='6'
					stroke-linecap='round'
				></path>
			</svg>
		</li>
	)
}

const SitePrep = () => {
	return (
		<li className={`${styles.left} ${styles.sitePrep}`}>
			<h2 className={styles.titleItem}>Site prep</h2>
			<p className={styles.textItem}>
				We’ll get your yard ready by installing the foundation and utility
				connections.
			</p>
			<div className={styles.time}>APPROX. FIVE MONTHS LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
			<img
				src='/howItWorks/site-prep.webp'
				alt='site preparation'
				className={styles.image}
			/>
		</li>
	)
}

const Transport = () => {
	return (
		<li className={`${styles.right} ${styles.transport}`}>
			<h2 className={styles.titleItem}>Transport</h2>
			<p className={styles.textItem}>
				Your Backyard begins its journey from our factory to your home.
			</p>
			<div className={styles.time}>TWO WEEKS LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
			<img
				src='/howItWorks/transport.webp'
				alt='Backyard on a truck'
				className={styles.image}
			/>
		</li>
	)
}

const CraneIn = () => {
	return (
		<li className={`${styles.left} ${styles.craneIn}`}>
			<h2 className={styles.titleItem}>Crane in</h2>
			<p className={styles.textItem}>
				In just a few hours, we crane Backyard onto its foundation. It's quite
				the scene.
			</p>
			<div className={styles.time}>A FEW DAYS LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
			<img
				src='/howItWorks/crane-in.webp'
				alt='Backyard craning in'
				className={styles.image}
			/>
		</li>
	)
}

const WrapUp = () => {
	return (
		<li className={`${styles.right} ${styles.wrapUp}`}>
			<h2 className={styles.titleItem}>Wrap up</h2>
			<p className={styles.textItem}>
				We connect Backyard to the grid, hook up the solar system, and
				thoroughly inspect every inch of Backyard to ensure it's good to go.
			</p>
			<div className={styles.time}>ONE DAY LATER</div>
			<div className={styles.line}></div>
			<div className={styles.bullet}></div>
		</li>
	)
}

const Final = () => {
	return (
		<li className={styles.final}>
			<h2>Welcome</h2>
			<p>You’re ready for your housewarming party.</p>
			<div className={styles.time}>THREE WEEKS LATER</div>
			<div className={styles.bullet}></div>
		</li>
	)
}
