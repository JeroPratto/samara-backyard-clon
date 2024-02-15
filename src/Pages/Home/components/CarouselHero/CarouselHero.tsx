import React, { useEffect, useRef, useState } from 'react'
import styles from './CarouselHero.module.css'
import green from '/home/carousel/green.jpg'
import hollywood from '/home/carousel/hollywood.jpg'
import twoBedroom from '/home/carousel/two-bedroom-hero.jpg'
import arrowRight from '/home/carousel/arrowRight.svg'
import arrowLeft from '/home/carousel/arrowLeft.svg'

export type CarouselHeroProps = {
	// types...
}

const CarouselHero: React.FC<CarouselHeroProps> = ({}) => {
	const carousel = useRef<HTMLUListElement>(null)
	const card = useRef<HTMLLIElement>(null)
	const [index, setIndex] = useState(0)
	const info = [
		{ name: 'Two bedroom', feets: '690' },
		{ name: 'One bedroom', feets: '540' },
		{ name: 'Studio', feets: '420' },
	]
	const goLeft = () => {
		carousel.current!.scrollLeft += -card.current!.offsetWidth
	}
	const goRight = () => {
		carousel.current!.scrollLeft += card.current!.offsetWidth
	}
	const infiniteScroll = () => {
		if (carousel.current) {
			if (carousel.current.scrollLeft === 0) {
				carousel.current.classList.add(styles.noTransition)
				carousel.current.scrollLeft =
					carousel.current.scrollWidth - 2 * carousel.current.offsetWidth
				carousel.current.classList.remove(styles.noTransition)
			} else if (
				Math.ceil(carousel.current.scrollLeft) ===
				carousel.current.scrollWidth - carousel.current.offsetWidth
			) {
				carousel.current.classList.add(styles.noTransition)
				carousel.current.scrollLeft = carousel.current.offsetWidth
				carousel.current.classList.remove(styles.noTransition)
			}
		}
		setIndex(getVisibleElementIndex())
	}
	// start in second place
	useEffect(() => {
		if (carousel.current) {
			carousel.current.classList.add(styles.noTransition)
			carousel.current.scrollLeft = card.current!.offsetWidth
			carousel.current.classList.remove(styles.noTransition)
		}
	}, [])
	//
	const getVisibleElementIndex = () => {
		if (carousel.current) {
			const containerBounds = carousel.current.getBoundingClientRect()
			const cards = carousel.current.getElementsByClassName(styles.card)

			for (let i = 0; i < cards.length; i++) {
				const card = cards[i] as HTMLElement
				const cardBounds = card.getBoundingClientRect()
				// Verifica si al menos el 50% del elemento está visible
				if (
					(cardBounds.left >= containerBounds.left &&
						cardBounds.left <= containerBounds.right) ||
					(cardBounds.right >= containerBounds.left &&
						cardBounds.right <= containerBounds.right)
				) {
					if (i === 0) return 0
					if (i === 3) return 0
					return i
				}
			}
		}

		return -1
	}
	return (
		<>
			<div className={styles.wrapper}>
				<button className={styles.left} onClick={goLeft}>
					<img src={arrowLeft} alt='' />
				</button>
				<ul
					className={styles.carousel}
					onScroll={infiniteScroll}
					ref={carousel}
				>
					<li className={styles.card} ref={card}>
						<div className={styles.image}>
							<img src={hollywood} alt='' draggable={false} />
						</div>
					</li>
					<li className={styles.card}>
						<div className={styles.image}>
							<img src={twoBedroom} alt='' draggable={false} />
						</div>
					</li>
					<li className={styles.card}>
						<div className={styles.image}>
							<img src={green} alt='' draggable={false} />
						</div>
					</li>
					<li className={styles.card}>
						<div className={styles.image}>
							<img src={hollywood} alt='' draggable={false} />
						</div>
					</li>
					<li className={styles.card}>
						<div className={styles.image}>
							<img src={twoBedroom} alt='' draggable={false} />
						</div>
					</li>
				</ul>
				<div className={styles.information}>
					<p>
						<span className={styles.name}>{info[index].name}</span>
						<span className={styles.feets}>{info[index].feets} sq. ft.</span>
					</p>
					<div className={styles.circlesContainer}>
						<span className={index === 0 ? styles.current : ''}></span>
						<span className={index === 1 ? styles.current : ''}></span>
						<span className={index === 2 ? styles.current : ''}></span>
					</div>
				</div>
				<button className={styles.right} onClick={goRight}>
					<img src={arrowRight} alt='' />
				</button>
			</div>
		</>
	)
}

export default CarouselHero
