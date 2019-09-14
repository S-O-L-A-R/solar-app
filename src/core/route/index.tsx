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
		default:
			return <Redirect to="/some-where" />
	}
}

export default function Routes() {
	return (
		<Switch>
			<Route path="/menu" component={loadable(() => import(/* webpackChunkName: 'menu' */ 'pages/menu'))} />
			<Route path="/order" component={loadable(() => import(/* webpackChunkName: 'order' */ 'pages/order'))} />
			<Route path="/" component={SmartRouting} />
			<Route component={loadable(() => import(/* webpackChunkName: 'not found' */ 'components/NotFound'))} />
		</Switch>
	)
}
