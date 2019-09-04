import { Router, Dependencies, constants } from 'router5'
import { DoneFn } from 'router5/types/types/base'
import { RouterState } from '../../../types'
import { routesMap } from '../../routes'

export const fetchData = (router: Router, dependencies: Dependencies) => async (
	toState: RouterState,
	fromState: RouterState,
	done: DoneFn,
) => {
	if (toState.name === constants.UNKNOWN_ROUTE) {
		return true
	}

	let toRoute = routesMap[toState.name]

	if (!toRoute || !toRoute.fetch) {
		return toState
	}

	toState.data = await toRoute.fetch(toState, {
		...dependencies,
	})

	return toState
}
