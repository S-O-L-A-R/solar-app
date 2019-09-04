import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { unregister } from './serviceWorker'
import { loadableReady } from '@loadable/component'
import { configure as mobxConfigure } from 'mobx'
import routerFactory from './core/router'
import App from 'core/view/App'

mobxConfigure({ enforceActions: 'observed' })

let router = routerFactory()

loadableReady(() => {
	ReactDOM.render(
		<RouterProvider router={router}>
			<App />
		</RouterProvider>,
		document.getElementById('root'),
	)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
