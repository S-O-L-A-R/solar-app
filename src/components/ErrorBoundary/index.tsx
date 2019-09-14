import React from 'react'
import ErrorComponent from './error'
import * as Sentry from '@sentry/browser'

interface Props {
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
		Sentry.withScope(scope => {
			scope.setExtras(info)
			const eventId = Sentry.captureException(error)
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorComponent />
		}

		return this.props.render ? this.props.render() : this.props.children
	}
}
