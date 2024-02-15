import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '/header/logo.svg'
import openMenuIcon from '/header/open-menu.svg'
import closeMenuIcon from '/header/close-menu.svg'
import { Link, useLocation } from 'react-router-dom'

export type HeaderProps = {
	// types...
}

const Header: React.FC<HeaderProps> = ({}) => {
	const links = [
		{ text: 'Backyard', path: '/' },
		{ text: 'How it works', path: '/how-it-works' },
		{ text: 'Tech specs', path: '/tech-specs' },
		{ text: 'FAQ', path: '/' },
	]
	const location = useLocation()
	const { pathname } = location
	const [menuState, setMenuState] = useState(false)
	const closeMenu = () => setMenuState(false)
	const toggleState = () => setMenuState(!menuState)
	return (
		<header
			className={`${styles.container} ${menuState ? styles.menuOpen : ''}`}
		>
			<button className={styles.menuToggle} onClick={toggleState}>
				<img
					src={menuState ? closeMenuIcon : openMenuIcon}
					alt={menuState ? 'Close menu' : 'Open Menu'}
				/>
			</button>
			<Link to='/' className={styles.logoContainer}>
				<img src={logo} alt='Samara' />
			</Link>

			<nav className={styles.linksContainer}>
				{links.map((link, index) => (
					<Link
						to={link.path}
						className={pathname === link.path ? styles.current : ''}
						onClick={closeMenu}
						key={index}
					>
						{link.text}
					</Link>
				))}
			</nav>
			<Link to='#' className={styles.configureNow}>
				Design yours
			</Link>
		</header>
	)
}

export default Header
