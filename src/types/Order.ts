import { MenuItem } from './Menu'

export interface Order {
	user: {
		name: string
		avatar: string
	}
	table: string
	menus: MenuItem[]
	timestamp: number
}