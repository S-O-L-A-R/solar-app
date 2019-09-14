import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import loadable from '@loadable/component'
import qs from 'qs'
import useReactRouter from 'use-react-router'

const SmartRouting = () => {
	const {
		location: { search },
	} = useReactRouter()
	const q = qs.parse(search.replace('?', ''))
	switch (q.route) {
		case 'me.menu':
			return <Redirect to={`/menu${search}`} />
		case 'me.order':
			return <Redirect to={`/order${search}`} />
		case 'kitchen.menu':
			return <Redirect to={`/edit-menu${search}`} />
		case 'kitchen.order':
			return <Redirect to={`/kitchen${search}`} />
		case 'waitress.order':
			return <Redirect to={`/waitress${search}`} />
		case 'test':
			return <Redirect to="test" />
		default:
			return <Redirect to="/some-where" />
	}
}

export default function Routes() {
	return (
		<Switch>
			<Route path="/menu" component={loadable(() => import(/* webpackChunkName: 'menu' */ 'pages/menu'))} />
			<Route path="/order" component={loadable(() => import(/* webpackChunkName: 'order' */ 'pages/order'))} />
			<Route
				path="/edit-menu"
				component={loadable(() => import(/* webpackChunkName: 'edit-menu' */ 'pages/editMenu'))}
			/>
			<Route
				path="/kitchen"
				component={loadable(() => import(/* webpackChunkName: 'kitchen' */ 'pages/kitchenOrder'))}
			/>
			<Route
				path="/waitress"
				component={loadable(() => import(/* webpackChunkName: 'waitress' */ 'pages/waitressOrder'))}
			/>
			<Route path="/test" component={loadable(() => import(/* webpackChunkName: 'test' */ 'pages/test'))} />
			<Route path="/" component={SmartRouting} />
			<Route component={loadable(() => import(/* webpackChunkName: 'not found' */ 'components/NotFound'))} />
		</Switch>
	)
}
