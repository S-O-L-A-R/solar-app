import { MenuItem } from './Menu'
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
