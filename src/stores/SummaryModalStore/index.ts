import ModalStore from 'stores/ModalStore'
import { observable, action, runInAction } from 'mobx'
import { OrderItem } from 'types/Order'
import getClient from 'core/api'

class SummaryModalStore extends ModalStore {
	@observable
	order?: OrderItem

	@action.bound
	public async getSummary(userId: string) {
		const order = await getClient().getSummary<OrderItem>(userId)
		runInAction(() => {
			this.order = order
		})
		this.open()
	}
}

export default new SummaryModalStore()
