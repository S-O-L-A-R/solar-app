import React from 'react'
import createRouteComponent from './RouteComponent'

const RouteComponent: any = createRouteComponent('')

export default class App extends React.PureComponent {
	render() {
		return (
			<div>
				<span>Header</span>
				<div>
					<RouteComponent />
				</div>
			</div>
		)
	}
}
