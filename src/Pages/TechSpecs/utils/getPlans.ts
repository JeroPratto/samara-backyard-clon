interface Plan {
	url: string
	width: string
	height: string
}
export const getPlansDesktop = (): Plan[] => {
	const plans: Plan[] = [
		{
			url: '/specs/floorplan-studio.webp',
			height: "29'",
			width: "15'",
		},
		{
			url: '/specs/floorplan-onebed.webp',
			height: "37'",
			width: "15'",
		},
		{
			url: '/specs/floorplan-twobed.webp',
			height: "47'",
			width: "15'",
		},
	]
	return plans
}

export const getPlansMobile = (): Plan[] => {
	const plans: Plan[] = [
		{
			url: '/specs/floorplan-studio-mobile.webp',
			height: "15'",
			width: "29'",
		},
		{
			url: '/specs/floorplan-onebed-mobile.webp',
			height: "15'",
			width: "37'",
		},
		{
			url: '/specs/floorplan-twobed-mobile.webp',
			height: "15'",
			width: "47'",
		},
	]
	return plans
}
