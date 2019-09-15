import { MenuItem, MenuItemV3, Menu } from './Menu'
import { User } from './User'

export interface Order {
	user: {
		name: string
		avatarUrl: string
	}
	table: string
	timestamp: {
		nanos: number
		seconds: number
	}
	id: string
	items: {
		[id: string]: {
			amount: number
			memo: string
			menu: Menu
			quantity: number
			unitPrice: number
		}
	}
	paidTime: null
	state: string
	tableId: string
	total: {
		amount: number
		quantity: number
	}
	userId: string
}

export interface OrderItem {
	id: string | undefined
	createdDate: Object
	paidTime: string | null
	state: string
	tableId: string
	userId: string
	items: MenuItemV3[]
}
