import React from 'react'
import ErrorComponent from './error'

interface Props {
	key: string
	render?: () => {}
	children: React.ReactElement<any>
}

export default class ErrorBoundary extends React.Component<Props> {
	state = {
		error: false,
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		this.setState({ error: true })
		console.error(error, info)
	}

	render() {
		if (this.state.error) {
			return <ErrorComponent />
		}

		return this.props.render ? this.props.render() : this.props.children
	}
}
