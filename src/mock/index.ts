import { Order } from 'types'

export const RESTAURANT_TITLE = 'Cool Restaurant'

export const TABLE_NUMBER = 'Table No.9'

export const ACTIVE_MENU = {
	name: 'Gyu Don',
	thumbnail: 'https://avatars1.githubusercontent.com/u/10514215?s=460&v=4',
	desc: 'sdadasdasadsads',
	price: 900,
	active: true,
}

export const INACTIVE_MENU = {
	name: 'Gyu Don',
	thumbnail: 'https://avatars1.githubusercontent.com/u/10514215?s=460&v=4',
	desc: 'sdadasdasadsads',
	price: 900,
	active: false,
}

export const MOCK_ORDER: Order = {
	user: {
		name: 'gunhappy',
		thumbnail: 'https://avatars1.githubusercontent.com/u/10514215?s=460&v=4',
	},
	table: 'no.9',
	menus: [
		{
			name: 'Gyudon',
			memo: '+dsasd',
			amount: 9,
			total: 9,
			price: 50,
		},
	],
	timestamp: Date.now(),
}
