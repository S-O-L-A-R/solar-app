import React from 'react'
import Routes from 'core/route'
import { HashRouter } from 'react-router-dom'

export default function App() {
	return (
		<HashRouter>
			<div>
				<span>Header</span>
				<div>
					<Routes />
				</div>
			</div>
		</HashRouter>
	)
}
