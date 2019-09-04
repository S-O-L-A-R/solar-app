import { RouterState, Client } from '../types'
import { Router } from 'router5'
import { observable } from 'mobx'
import ApiClient from 'core/api/apiClient'

export default abstract class StoreAbstractClass {
	/**
	 * loading is an attribute that tell the loading state of store.
	 * null = not loaded,
	 * false = load failed,
	 * true = load suceeded
	 */
	@observable
	loading: boolean | null

	/**
	 * saving is an attribute that tell the saving state of store.
	 * false = not saving,
	 * true = saving
	 */
	@observable
	saving: boolean

	/**
	 * errors is a Map<key: string, value: string[]> that collect all errors after saving state.
	 */
	errors = observable.map<string, string[]>()
	/**
	 * router is a router page using router5.
	 */
	router?: Router

	/**
	 * client is a RESTful API client using Axios.
	 */
	api?: ApiClient

	constructor({ api, router }: Partial<Client>) {
		this.api = api
		this.router = router
		this.loading = null
		this.saving = false
	}

	/**
	 * save is a method that sending data via PUT or PATCH HTTP method to backend.
	 * @param value is any value that want to save.
	 * @return true if save successfully, false if save failed.
	 */
	abstract async save(value?: any): Promise<boolean | undefined>

	/**
	 * update is a method that update current state in store.
	 */
	abstract async update(): Promise<void>

	/**
	 * updateState is a method that fetch data from specific route to store.
	 * @param state is a RouterState at that time.
	 */
	abstract updateState(state: RouterState): void
}
