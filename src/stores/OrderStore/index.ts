import { observable, action, computed } from 'mobx'
import { Collection, Document } from 'firestorter'
import RestaurantStore from 'stores/RestaurantStore'
import { OrderItem } from 'types/Order'
import { ORDER_STATUS } from 'common/constants'

const userId = '@Gun'

class OrderStore {
	@observable
	public ordersCollection?: Collection<Document<OrderItem>>

	@action
	public setOrders() {
		if (!RestaurantStore.restaurant) return
		this.ordersCollection = new Collection<Document<OrderItem>>(`${RestaurantStore.restaurant.path}/orders`)
	}

	@computed
	get order() {
		if (!this.ordersCollection || !this.ordersCollection.hasDocs) return null
		const order = this.ordersCollection.docs.find(({ data, id }: any) => {
			return data.userId === userId && data.state === ORDER_STATUS.Pending
		})
		if (!order) return null
		return { ...order.data, id: order.id }
	}
}

export default new OrderStore()
