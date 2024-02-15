import { FutureCard } from '../ABetterFuture'

const getCardsFuture = (): FutureCard[] => {
	const cards: FutureCard[] = [
		{
			urlImg: '/home/qualities/2x-card.svg',
			title: 'more efficient',
			desc: 'Over 2x more energy-efficient than an equivalently-sized home.',
		},
		{
			urlImg: '/home/qualities/0kwh-card.svg',
			title: 'net grid utilization',
			desc: 'As few as 0 kWh drawn from the grid annually (net) with optional solar arrays.',
		},
	]
	return cards
}

export default getCardsFuture
