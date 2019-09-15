import React, { useEffect } from 'react'
import Routes from 'core/route'
import { SolarXUIStylesheet, Gap, SOLAR } from 'solarxui'
import RestaurantTitle from 'components/RestaurantTitle'
import ErrorBoundary from 'components/ErrorBoundary'
import { useObserver } from 'mobx-react'
import RestaurantStore from 'stores/RestaurantStore'
import useReactRouter from 'use-react-router'
import qs from 'qs'

import { PageContainer, Container, GlobalStylesheet } from './styled'

const NotFound = () => (
	<Container>
		<Gap type="vertical" size="40px">
			<SOLAR size={175} />
			<div className="highlight primary-text">Welcome to Too Slow To Wake Restaurant</div>
		</Gap>
	</Container>
)

export default function App() {
	const {
		location: { search },
	} = useReactRouter()
	const q = qs.parse(search.replace('?', ''))
	useEffect(() => {
		RestaurantStore.setRestaurant(q.rid)
	}, [q.rid])
	return useObserver(() => (
		<ErrorBoundary>
			<PageContainer>
				<SolarXUIStylesheet />
				{RestaurantStore.restaurant && RestaurantStore.restaurant.hasData ? (
					<>
						<RestaurantTitle />
						<Routes />
					</>
				) : (
					<NotFound />
				)}
				<GlobalStylesheet />
			</PageContainer>
		</ErrorBoundary>
	))
}
