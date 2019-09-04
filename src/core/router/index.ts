import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'
import listenersPlugin from 'router5-plugin-listeners'
import loggerPlugin from 'router5-plugin-logger'

import routes from '../routes'
import { fetchData } from './middleware/fetchData'
import { withStore } from './middleware/withStore'

const router = createRouter(routes, { allowNotFound: true, caseSensitive: true })
router.usePlugin(
	browserPlugin({
		useHash: false,
	}),
)

router.useMiddleware(fetchData, withStore)

router.usePlugin(listenersPlugin(), loggerPlugin)

export default function routerFactory() {
	return router
}
