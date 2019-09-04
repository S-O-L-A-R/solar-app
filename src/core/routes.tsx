import loadable from '@loadable/component'
import { routesToMap } from 'core/utils/routes'

const routes = [
	{
		name: 'home',
		path: '/',
		component: loadable(() => import(/* webpackChunkName: 'home' */ '../pages/home')),
	},
]

export const routesMap = routesToMap(routes)

export default routes
