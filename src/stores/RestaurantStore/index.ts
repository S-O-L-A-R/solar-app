import { observable, action } from 'mobx'
import { Document } from 'firestorter'
import { Restaurant } from 'types/Restaurant'

class RestaurantStore {
	@observable
	public restaurant?: Document<Restaurant>

	@action
	public setRestaurant(id: string) {
		this.restaurant = new Document<Restaurant>(`restaurants/${id}`)
	}
}

export default new RestaurantStore()
