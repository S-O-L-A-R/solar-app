import { Order } from 'types/Order'

export const TABLE_NUMBER = '1241'

export const MOCK_ORDER: Order = {
	user: {
		name: 'gunhappy',
		avatarUrl: 'https://avatars1.githubusercontent.com/u/10514215?s=460&v=4',
	},
	table: '9',
	menus: [
		{
			name: 'Gyudon',
			memo: '+dsasd',
			amount: 8,
			total: 9,
			price: 50,
		},
	],
	timestamp: Date.now(),
}
