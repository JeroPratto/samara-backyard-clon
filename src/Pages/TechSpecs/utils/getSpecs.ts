interface RowOfSpec {
	row: Specs[]
}
interface Specs {
	information: string
	clarification?: string
}
const getSpecs = (): RowOfSpec[] => {
	const specs: RowOfSpec[] = [
		{
			row: [
				{
					information: 'Starting at',
					clarification: '(Baseline unit + installation)',
				},
				{
					information: '$269,000',
					clarification: '($159,000 + $110,000)',
				},
				{
					information: '$284,000',
					clarification: '($169,000 + $115,000)',
				},
				{
					information: '$324,000',
					clarification: '($199,000 + $125,000)',
				},
			],
		},
		{
			row: [
				{
					information: 'Square footage',
				},
				{
					information: '420 gross sq. ft.',
				},
				{
					information: '540 gross sq. ft.',
				},
				{
					information: '690 gross sq. ft.',
				},
			],
		},
		{
			row: [
				{
					information: 'Unit dimensions',
					clarification: 'Excluding stairs and decks',
				},
				{
					information: "29' W × 15' D",
					clarification: `Height: 13'2" without foundation`,
				},
				{
					information: "37' W × 15' D",
					clarification: `Height: 13'2" without foundation`,
				},
				{
					information: "47' W × 15' D",
					clarification: `Height: 13'2" without foundation`,
				},
			],
		},
		{
			row: [
				{
					information: 'Space requirement',
				},
				{
					information: "39' × 25'",
				},
				{
					information: "47' × 25'",
				},
				{
					information: "57' × 25'",
				},
			],
		},
	]
	return specs
}

export default getSpecs
