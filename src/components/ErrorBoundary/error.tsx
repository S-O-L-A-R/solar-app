import React from 'react'

export default class ErrorComponent extends React.PureComponent {
	render() {
		return (
			<div className="text-center text-danger m-3 flex-column">
				<p>Sorry, Unexpected Error.</p>
			</div>
		)
	}
}
