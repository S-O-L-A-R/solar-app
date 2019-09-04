import { Router, Dependencies, constants, transitionPath } from 'router5'
import { RouterState, Client } from 'types'
import { DoneFn } from 'router5/types/types/base'
import { routesMap } from 'core/routes'
import StoreAbstractClass from 'common/StoreAbstracClass'

export const withStore = (router: Router, dependencies: Dependencies) => async (
	toState: RouterState,
	fromState: RouterState,
	done: DoneFn,
) => {
	if (toState.name === constants.UNKNOWN_ROUTE) {
		return true
	}

	let stores: { [name: string]: StoreAbstractClass } = {}

	if (fromState && fromState.stores) {
		stores = fromState.stores
	}

	const { toActivate } = transitionPath(toState, fromState)

	let storePromises = []
	for (let segment of toActivate) {
		let route = routesMap[segment]

		if (!route || !route.store) {
			continue
		}

		if (stores[route.storeName]) {
			let store = stores[route.storeName]
			store.updateState(toState)
		} else {
			let promise = route.store(toState).then((Store: new (client: Partial<Client>) => StoreAbstractClass) => {
				// Work around
				Store = (Store as any).__esModule ? (Store as any).default : Store
				let store = new Store({ router, ...dependencies })
				store.updateState(toState)
				stores[route.storeName] = store
			})

			storePromises.push(promise)
		}
	}
	await Promise.all(storePromises)

	toState.stores = stores

	return toState
}
