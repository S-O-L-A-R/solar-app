import React from 'react'
import Routes from 'core/route'
import { BrowserRouter } from 'react-router-dom'
import { SolarXUIStylesheet } from 'solarxui'
import RestaurantTitle from 'components/RestaurantTitle'
import ErrorBoundary from 'components/ErrorBoundary'
import { PageContainer } from './styled'

export default function App() {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<PageContainer>
					<SolarXUIStylesheet />
					<RestaurantTitle />
					<Routes />
				</PageContainer>
			</BrowserRouter>
		</ErrorBoundary>
	)
}
