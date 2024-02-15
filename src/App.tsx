import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './Pages/Home/Home'
import { TechSpecs } from './Pages/TechSpecs'
import Footer from './Pages/Footer/Footer'
import { HowItWorks } from './Pages/HowItWorks'

function App() {
	return (
		<BrowserRouter>
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
