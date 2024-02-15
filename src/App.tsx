import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './Pages/Home/Home'
import { TechSpecs } from './Pages/TechSpecs'
import Footer from './Pages/Footer/Footer'
import { HowItWorks } from './Pages/HowItWorks'
import { useEffect } from 'react'

function App() {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tech-specs' element={<TechSpecs />} />
				<Route path='/how-it-works' element={<HowItWorks />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App

const ScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}
