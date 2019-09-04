import React from 'react'
import { Provider } from 'mobx-react'
import { constants } from 'router5'
import { routeNode } from 'react-router5'
import { routesMap } from 'core/routes'
import ErrorBoundary from 'components/ErrorBoundary'

type ErrorPageComponent = (name: string) => () => JSX.Element | never
let errorPage: ErrorPageComponent = (name: string) => () => {
	throw new Error(`No component is defined for ${name}`)
}

export default function(nodeName: string, wrapRouteNode = true, notFound = null) {
	let splittedNodeName

	if (nodeName === '') {
		splittedNodeName = []
	} else {
		splittedNodeName = nodeName.split('.')
	}

	let component: React.StatelessComponent<any> = ({ router, previousRoute, route, ...props }) => {
		if (!route) {
			return null
		}

		let routeName = route.name
		// read route at the current level
		let levelNodeName = routeName
			.split('.')
			.slice(0, splittedNodeName.length + 1)
			.join('.')

		let routeMetadata = routesMap[levelNodeName]
		let Component = routeMetadata && routeMetadata.component
		if (routeName === constants.UNKNOWN_ROUTE) {
			Component = notFound
		} else if (!Component) {
			Component = errorPage(routeName)
		}

		return (
			<Provider {...route.stores}>
				<ErrorBoundary key={routeName}>
					<Component {...props} />
				</ErrorBoundary>
			</Provider>
		)
	}

	if (!wrapRouteNode) {
		return component
	}

	return routeNode(nodeName)(component)
}
