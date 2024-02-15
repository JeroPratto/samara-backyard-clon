interface StepInformation {
	title: string
	desc: string
	url: string
	black: boolean
	element: string
}
const getStepsInformation = (): StepInformation[] => {
	const data: StepInformation[] = [
		{
			title: 'Design yours',
			desc: 'Tailor your unit with a layout and customizations that reflect your style and needs.',
			url: '/home/steps/information-1.webp',
			black: true,
			element: 'StepImage',
		},
		{
			title: 'Sign off',
			desc: 'We visit your site to create an accurate estimate for the work required to install Backyard.',
			url: '/home/steps/information-2.mp4',
			black: false,
			element: 'StepVideo',
		},
		{
			title: 'Sit back',
			desc: 'We get building permits, manufacture your unit and prepare your site. You decide how to use it.',
			url: '/home/steps/information-3.mp4',
			black: false,
			element: 'StepVideo',
		},
		{
			title: 'Get your keys',
			desc: "Seven months after approving your estimate, you'll get the keys to your own Backyard oasis.",
			url: '/home/steps/information-4.webp',
			black: true,
			element: 'StepImage',
		},
	]
	return data
}

export default getStepsInformation
