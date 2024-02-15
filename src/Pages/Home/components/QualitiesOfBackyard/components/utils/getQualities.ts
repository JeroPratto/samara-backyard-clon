export interface Qualiti {
	title: string
	desc: string
	information: string[]
	bgColor: string
	maintextColor: string
	secondTextColor: string
}

const getQualities = (): Qualiti[] => {
	const data: Qualiti[] = [
		{
			title: 'High performance prefab',
			desc: 'Backyard is factory assembled using our best-in-class construction system designed for the long haul.',
			information: [
				'Mold, rot, and termite-resistant cold formed steel frame',
				'Unfading smoot-coated insulated steel cladding',
				'Long-lasting Galvalume-coated standing seam steel roof',
			],
			bgColor: '#f5f2de',
			maintextColor: '#000',
			secondTextColor: 'rgba(0,0,0,0.6)',
		},
		{
			title: 'Integrated air purification',
			desc: 'Safe and comfortable year round, even when wildfire smoke, viruses, pollen and dust pollute the air.',
			information: [
				'Hospital-grade air filtration',
				'changes air 3-4x every hour',
			],
			bgColor: '#263db5',
			maintextColor: '#fff',
			secondTextColor: 'rgba(255,255,255,0.6)',
		},
		{
			title: 'Net Zero solar roof',
			desc: 'Save on energy costs every month and even offset the power consumption of your main home.',
			information: [
				'Low to zero monthly electricity costs for Backyard (net)',
				"Reduce your entire home's dependence on the grid",
			],
			bgColor: '#ffbd00',
			maintextColor: '#000',
			secondTextColor: 'rgba(0,0,0,0.6)',
		},
	]
	return data
}

export default getQualities
