import React from 'react'
import RestaurantStore from 'stores/RestaurantStore'

const RestaurantTitle = () => {
	if (!RestaurantStore.restaurant) return null
	return (
		<h1 className="title" style={{ fontWeight: 'normal' }}>
			{RestaurantStore.restaurant.data.name}
		</h1>
	)
}

export default RestaurantTitle
