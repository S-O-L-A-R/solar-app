import { User } from './User'

export interface Menu {
	id: string
	name: string
	desc: string
	thumbnailUrl: string
	price: number
	active: boolean
}

export interface MenuItemV2 {
	memo: string
	menuId: string
	quantity: number
	tableId: string
	user: User
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
