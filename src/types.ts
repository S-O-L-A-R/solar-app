import { State, Router } from 'router5'
import StoreAbstractClass from 'common/StoreAbstracClass'
import ApiClient from 'core/api/apiClient'

export type RouterState = {
	// fetchData middlware
	data?: any
	// withStore middleware
	stores?: {
		[name: string]: StoreAbstractClass
	}
} & State

export interface Client {
	api: ApiClient
	router: Router
}
