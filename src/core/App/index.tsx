import React, { useEffect, useState } from 'react'
import Routes from 'core/route'
import { BrowserRouter } from 'react-router-dom'
import { SolarXUIStylesheet } from 'solarxui'
import RestaurantTitle from 'components/RestaurantTitle'
import { PageContainer } from './styled'

export default function App() {
	const [state, setState] = useState({ id: '', name: '' })
	useEffect(() => {
		liff.bluetooth &&
			liff.bluetooth.requestDevice().then(({ id, name }) => {
				setState({ id, name: name || '' })
			})
	}, [])
	return (
		<BrowserRouter>
			<PageContainer>
				<h1>{state.id + state.name}</h1>
				<SolarXUIStylesheet />
				<RestaurantTitle />
				<Routes />
			</PageContainer>
		</BrowserRouter>
	)
}
