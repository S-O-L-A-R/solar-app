import React from 'react'
import Routes from 'core/route'
import { BrowserRouter } from 'react-router-dom'
import { SolarXUIStylesheet } from 'solarxui'
import RestaurantTitle from 'components/RestaurantTitle'
import { PageContainer } from './styled'

export default function App() {
	return (
		<BrowserRouter>
			<PageContainer>
				<SolarXUIStylesheet />
				<RestaurantTitle />
				<Routes />
			</PageContainer>
		</BrowserRouter>
	)
}
