import React from 'react'
import { ConnectedLink } from 'react-router5'

export default class ErrorComponent extends React.PureComponent {
	render() {
		return (
			<div className="text-center text-danger m-3 flex-column">
				<p>Sorry, Unexpected Error.</p>
				<ConnectedLink routeName="home" className="btn btn-link">
					Back to home
				</ConnectedLink>
			</div>
		)
	}
}
