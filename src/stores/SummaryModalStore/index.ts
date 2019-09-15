import ModalStore from 'stores/ModalStore'
import { observable, action } from 'mobx'
import { OrderItem } from 'types/Order'

class SummaryModalStore extends ModalStore {
	@observable
	order?: OrderItem

	@action.bound
	public setSummaryModalStore(order: OrderItem) {
		this.order = order
		this.open()
	}
}

export default new SummaryModalStore()
