// import StoreAbstractClass from 'common/StoreAbstracClass'
import ApiClient from 'core/api/apiClient'

export interface Client {
	api: ApiClient
}

export interface Menu {
	name: string
	desc: string
	thumbnail: string
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

export interface Order {
	user: {
		name: string
		thumbnail: string
	}
	table: string
	menus: MenuItem[]
	timestamp: number
}
