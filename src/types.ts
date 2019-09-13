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
