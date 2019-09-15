import { observable, action, computed, runInAction } from 'mobx'
import { Collection, Document } from 'firestorter'
import RestaurantStore from 'stores/RestaurantStore'
import { OrderItem } from 'types/Order'
import { ORDER_STATUS } from 'common/constants'

class OrderStore {
	@observable
	public ordersCollection?: Collection<Document<OrderItem>>

	@observable
	public user: any

	@action
	public async setOrders() {
		if (!RestaurantStore.restaurant) return
		this.ordersCollection = new Collection<Document<OrderItem>>(`${RestaurantStore.restaurant.path}/orders`)
		if (liff.getProfile) {
			const user = await liff.getProfile()
			runInAction(() => {
				this.user = user
			})
		}
	}

	@computed
	get order() {
		if (!this.ordersCollection || !this.ordersCollection.hasDocs) return null
		const order = this.ordersCollection.docs.find(({ data }: any) => {
			return this.user && data.userId === this.user.userId && data.state === ORDER_STATUS.Pending
		})
		if (!order) return null
		return { ...order.data, id: order.id }
	}
}

export default new OrderStore()
