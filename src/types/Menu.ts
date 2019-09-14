interface Menu {
	name: string
	desc: string
	thumbnailUrl: string
	price: number
	active: boolean
}

interface MenuItem {
	name: string
	memo: string
	amount: number
	total: number
	price: number
}

interface DraftMenuItem {
	memo: string
	amount: number
	user: User
}
