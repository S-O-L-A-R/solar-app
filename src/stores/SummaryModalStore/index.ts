import ModalStore from 'stores/ModalStore'
import { observable, action, runInAction } from 'mobx'
import { Order } from 'types/Order'
import getClient from 'core/api'

class SummaryModalStore extends ModalStore {
	@observable
	order?: Order

	@action.bound
	public async getSummary(userId: string) {
		const order = await getClient().getSummary<Order>(userId)
		runInAction(() => {
			this.order = order
		})
	}

	@action.bound
	public async pay() {
		if (!this.order) return null
		const res = await getClient().pay({
			userId: this.order.userId,
			tableId: this.order.tableId,
		})
		if (liff.openWindow) {
			liff.openWindow({ url: res.info.paymentUrl.web })
		} else {
			window.location.href = res.info.paymentUrl.web
		}
	}
}

export default new SummaryModalStore()
