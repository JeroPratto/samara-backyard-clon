import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import { useLocation } from 'react-router-dom'
import AvailableNow from './Components/AvailableNow'

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps> = ({}) => {
	const location = useLocation()
	const [dark, setDark] = useState(true)
	useEffect(() => {
		if (location.pathname === '/') setDark(false)
		else setDark(true)
	}, [location.pathname])
	const lists = [
		{
			title: 'Samara',
			items: ['News', 'Jobs', 'Showrooms', 'For developers'],
		},
		{
			title: 'Backyard',
			items: ['Design yours', 'How it works', 'Tech specs', 'FAQ'],
		},
		{
			title: 'Social',
			items: ['Instagram', 'Youtube', 'LinkedIn'],
		},
	]
	return (
		<>
			{dark ? <AvailableNow /> : ''}
			<footer className={`${styles.container} ${dark ? styles.dark : ''}`}>
				{lists.map((list, index) => (
					<ul className={styles.list} key={index}>
						<li className={styles.title}>{list.title}</li>
						{list.items.map((text, textIndex) => (
							<li className={styles.item} key={textIndex}>
								{text}
							</li>
						))}
					</ul>
				))}
				<div className={styles.contact}>
					<p>Have questions?</p>
					<button className={styles.contactUs}>Contact us</button>

					<p>Get updates</p>
					<p className={styles.dropUs}>
						Drop us your email to learn waht's next.
					</p>
					<form>
						<input type='email' required />
					</form>
				</div>
			</footer>
		</>
	)
}

export default Footer
