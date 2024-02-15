import React, { useEffect, useRef, useState } from 'react'
import styles from './ThreeSizes.module.css'
import arrow from '/home/threeSizes/arrow.svg'
import arrowBlue from '/home/threeSizes/arrow-right-blue.svg'
import getThreeSizes from './utils/getThreeSizes'
import confImg from '/home/threeSizes/configure-button-img.webp'

export type ThreeSizesProps = {
	// types...
}

const ThreeSizes: React.FC<ThreeSizesProps> = ({}) => {
	const colors = [
		{
			name: '',
			color: '#f6f7f5',
		},
		{
			name: '',
			color: '#dadad9',
		},
		{
			name: '',
			color: '#d7d5cb',
		},
		{
			name: '',
			color: '#375033',
		},
		{
			name: '',
			color: '#2e2e2c',
		},
	]
	const sizes = getThreeSizes()
	const [currentColor, setCurrentColor] = useState([0, 0, 0])
	useEffect(() => console.log(currentColor))
	const carousel = useRef<HTMLUListElement>(null)
	const card = useRef<HTMLLIElement>(null)
	const [visible, setVisible] = useState(1)
	const goLeft = () => {
		carousel.current!.scrollLeft += -card.current!.offsetWidth
	}
	const goRight = () => {
		carousel.current!.scrollLeft += card.current!.offsetWidth
	}

	const getVisibleElementIndex = () => {
		if (carousel.current) {
			const containerWidth = carousel.current.offsetWidth
			const scrollLeft = carousel.current.scrollLeft

			// Calcula el índice del elemento central
			const index = Math.round(scrollLeft / containerWidth)

			return index
		}

		return -1 // Retorna -1 si no se puede calcular el índice
	}
	const currentIndex = () => {
		setVisible(getVisibleElementIndex())
	}
	// start in second place
	useEffect(() => {
		if (carousel.current) {
			carousel.current.classList.add(styles.noTransition)
			carousel.current.scrollLeft = card.current!.offsetWidth
			carousel.current.classList.remove(styles.noTransition)
		}
	}, [])
	const changeColor = (color: number) => {
		setCurrentColor((cur) => {
			const updatedColor = [...cur]
			updatedColor[visible] = color
			return updatedColor
		})
	}
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Three sizes. <span>Tons of possibility.</span>
			</h2>
			<div className={styles.carouselAndInformation}>
				<button
					className={`${styles.left} ${visible === 0 ? styles.disable : ''}`}
					onClick={goLeft}
				>
					<img src={arrow} alt='' />
				</button>
				<ul className={styles.carousel} ref={carousel} onScroll={currentIndex}>
					{sizes.map((size, index) => (
						<li className={styles.card} ref={card} key={index}>
							<p className={styles.cardTitle}>
								{size.title} <span>{size.feets} sq. ft.</span>
							</p>
							<div className={styles.imageContainer}>
								<img
									src={size.images[currentColor[index]]}
									alt={size.title}
									draggable={false}
								/>
							</div>
						</li>
					))}
				</ul>
				<button
					className={`${styles.right} ${visible === 2 ? styles.disable : ''}`}
					onClick={goRight}
				>
					<img src={arrow} alt='' />
				</button>
				<div className={styles.circles}>
					<span className={visible === 0 ? styles.current : ''}></span>
					<span className={visible === 1 ? styles.current : ''}></span>
					<span className={visible === 2 ? styles.current : ''}></span>
				</div>
				<div className={styles.colorPickerContainer}>
					{colors.map((color, index) => (
						<button
							onClick={() => changeColor(index)}
							className={`${
								currentColor[visible] === index ? styles.current : ''
							} ${styles.picker}`}
							style={{ backgroundColor: color.color }}
						>
							<span className={styles.border}></span>
						</button>
					))}
				</div>
				<div className={styles.informationContainer}>
					<p className={styles.allModels}>
						All models include our signature kitchen, bathroom with walk-in
						shower, combo washer dryer, and lots of built-in storage.
					</p>
					<p className={styles.custom}>
						Custom built and fully installed for as little as{' '}
						<span>${sizes[visible].totalPrice}</span> or{' '}
						<span>${sizes[visible].monthly}/mo</span>
					</p>
					<div className={styles.informationBtns}>
						<button className={styles.knowMoreBtn}>
							<span className={styles.knowMore}>Want to know more?</span>
							<span className={styles.ourExperts}>
								Talk to one of our experts
							</span>
						</button>
						<button className={styles.configureBtn}>
							<img src={confImg} alt='' className={styles.configImg} />
							<span>Configure in 3D</span>
							<img src={arrowBlue} alt='' className={styles.arrowBlue} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThreeSizes
