import styles from './styles/Step.module.css'

interface StepImageProps {
	src: string
	desc: string
}

export const StepImage: React.FC<StepImageProps> = ({ src, desc }) => {
	return (
		<div className={styles.imageContainer}>
			<p className={styles.desc}>{desc}</p>
			<img src={src} alt='' />
		</div>
	)
}
interface StepVideoProps {
	src: string
	desc: string
}
export const StepVideo: React.FC<StepVideoProps> = ({ src, desc }) => {
	return (
		<div className={styles.videoContainer}>
			<p className={styles.desc}>{desc}</p>
			<video src={src} muted loop playsInline autoPlay disableRemotePlayback />
		</div>
	)
}
