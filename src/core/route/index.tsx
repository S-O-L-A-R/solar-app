import React from 'react'
import { Switch, Route } from 'react-router'
import loadable from '@loadable/component'

export default function Routes() {
	return (
		<Switch>
			<Route
				path="/"
				search="?route=me.menu"
				component={loadable(() => import(/* webpackChunkName: 'menu' */ 'pages/menu'))}
			/>
			<Route
				path="/"
				search="?route=me.order"
				component={loadable(() => import(/* webpackChunkName: 'menu' */ 'pages/order'))}
			/>
			<Route component={loadable(() => import(/* webpackChunkName: 'not found' */ 'components/NotFound'))} />
		</Switch>
	)
}
