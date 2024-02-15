import React from 'react'
import { Hero } from './components/Hero'
import { CarouselHero } from './components/CarouselHero'
import { UnlockPotential } from './components/UnlockPotential'
import { FourSimpleSteps } from './components/FourSimpleSteps'
import { ThreeSizes } from './components/ThreeSizes'
import { YourMainHome } from './components/YourMainHome'
import { QualitiesOfBackyard } from './components/QualitiesOfBackyard'
import { BackyardCardGrid } from './components/BackyardCardGrid'

export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<>
			<Hero />
			<CarouselHero />
			<UnlockPotential />
			<ThreeSizes />
			<FourSimpleSteps />
			<YourMainHome />
			<QualitiesOfBackyard />
			<BackyardCardGrid />
		</>
	)
}

export default Home
