import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './serviceWorker'
import { configure as mobxConfigure } from 'mobx'
import App from 'core/App'
import mliffx from 'mliffx'
import * as Sentry from '@sentry/browser'
import firebase from 'firebase'
import 'firebase/firestore'
import { initFirestorter } from 'firestorter'
import { BrowserRouter } from 'react-router-dom'

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
})

initFirestorter({ firebase: firebase })

Sentry.init({ dsn: 'https://0e233b46197a4a4f967942af01897277@sentry.io/1727239' })

mliffx.init()

mobxConfigure({ enforceActions: 'observed' })

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
