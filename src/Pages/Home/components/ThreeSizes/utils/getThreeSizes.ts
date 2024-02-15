interface ASize {
	title: string
	feets: string
	images: string[]
	totalPrice: string
	monthly: string
}
const getThreeSizes = (): ASize[] => {
	const information: ASize[] = [
		{
			title: 'Studio',
			feets: '420',
			images: [
				'/home/threeSizes/studio.webp',
				'/home/threeSizes/studio-driftwood.webp',
				'/home/threeSizes/studio-parchment.webp',
				'/home/threeSizes/studio-evergreen.webp',
				'/home/threeSizes/studio-dark-bronze.webp',
			],
			totalPrice: '269,000',
			monthly: '1,611',
		},
		{
			title: 'One bedroom',
			feets: '540',
			images: [
				'/home/threeSizes/one-beedrom.webp',
				'/home/threeSizes/one-beedrom-driftwood.webp',
				'/home/threeSizes/one-beedrom-parchment.webp',
				'/home/threeSizes/one-beedrom-evergreen.webp',
				'/home/threeSizes/one-beedrom-dark-bronze.webp',
			],
			totalPrice: '284,000',
			monthly: '1,701',
		},
		{
			title: 'Two bedroom',
			feets: '690',
			images: [
				'/home/threeSizes/two-beedrom.webp',
				'/home/threeSizes/two-beedrom-driftwood.webp',
				'/home/threeSizes/two-beedrom-parchment.webp',
				'/home/threeSizes/two-beedrom-evergreen.webp',
				'/home/threeSizes/two-beedrom-dark-bronze.webp',
			],
			totalPrice: '324,000',
			monthly: '1,940',
		},
	]
	return information
}

export default getThreeSizes
