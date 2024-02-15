export interface BackyardCardInterface {
	preTitle: string
	title: string
	url: string
	isImage: boolean
}
const getBackyardCards = (): BackyardCardInterface[] => {
	const data: BackyardCardInterface[] = [
		{
			preTitle: 'Fully featured.',
			title: 'Tech specs',
			url: '/home/backyardCards/default.mp4',
			isImage: false,
		},
		{
			preTitle: 'Make Backyard yours.',
			title: 'Configure in 3D',
			url: '/home/backyardCards/configure-landscape.webp',
			isImage: true,
		},
		{
			preTitle: 'Seeing is believing.',
			title: 'Find a showroom',
			url: '/home/imageCard.webp',
			isImage: true,
		},
		{
			preTitle: 'Backyard Multiunit.',
			title: 'For developers',
			url: '/home/backyardCards/multiunit-landscape.webp',
			isImage: true,
		},
	]
	return data
}

export default getBackyardCards
