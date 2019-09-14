import React from 'react'
import Routes from 'core/route'
import { BrowserRouter } from 'react-router-dom'
import { SolarXUIStylesheet } from 'solarxui'
import RestaurantTitle from 'components/RestaurantTitle'
import { inject, observer } from 'mobx-react'
import { PageContainer } from './styled'
import MLIFFX from 'mliffx'

export default inject('mliffx')(
	observer(function App({ mliffx }: { mliffx: typeof MLIFFX }) {
		return (
			<BrowserRouter>
				<PageContainer>
					{mliffx.userProfile.value.data && <h1>{mliffx.userProfile.value.data.userId}</h1>}
					<SolarXUIStylesheet />
					<RestaurantTitle />
					<Routes />
				</PageContainer>
			</BrowserRouter>
		)
	}),
)
