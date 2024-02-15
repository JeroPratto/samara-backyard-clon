import styles from './AvailableNow.module.css'
import backyardOn from '/footer/backyard-on.webp'

const AvailableNow = () => {
	return (
		<div className={styles.availableNow}>
			<div className={styles.top}>
				<p className={styles.availableTitle}>Available now in California.</p>
				<p className={styles.desc}>
					Starting at $269k or $1,611/mo, <br />
					including installation.
				</p>
				<div className={styles.reserve}>
					<p className={styles.reserveNow}>Reserve now for free</p>
					<p className={styles.notIn}>Not in California?</p>
					<p className={styles.tellUs}>Tell us where to build next</p>
				</div>
			</div>
			<img src={backyardOn} alt='' />
		</div>
	)
}

export default AvailableNow
