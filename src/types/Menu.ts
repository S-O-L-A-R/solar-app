import { User } from './User'

export interface Menu {
	name: string
	desc: string
	thumbnailUrl: string
	price: number
	active: boolean
}

export interface MenuItem {
	name: string
	memo: string
	amount: number
	total: number
	price: number
}

export interface DraftMenuItemType {
	memo: string
	amount: number
	user: User
}
