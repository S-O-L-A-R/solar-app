import { MenuItem, MenuItemV3 } from './Menu'
import { User } from './User'

export interface Order {
	user: {
		name: string
		avatarUrl: string
	}
	table: string
	menus: MenuItem[]
	timestamp: number
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
