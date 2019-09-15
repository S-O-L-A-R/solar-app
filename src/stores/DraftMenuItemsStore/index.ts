import { observable, action, computed, runInAction } from 'mobx'
import { Collection, Document } from 'firestorter'
import { MenuItemV2 } from 'types/Menu'
import RestaurantStore from 'stores/RestaurantStore'
import getClient from 'core/api'
import SummaryModalStore from 'stores/SummaryModalStore'

class DraftMenuItemStore {
	@observable
	public menusCollection?: Collection<Document<MenuItemV2>>
	@observable
	timestamp: number = Date.now()

	@action
	public setDraftMenuItems() {
		if (!RestaurantStore.restaurant) return
		this.menusCollection = new Collection<Document<MenuItemV2>>(
			`${RestaurantStore.restaurant.path}/draft-menu-items`,
		)
	}

	@computed
	get menus() {
		if (!this.menusCollection || !this.menusCollection.hasDocs) return []
		return this.menusCollection.docs.map(({ id, data }) => ({ id, ...data }))
	}

	@action
	async addDraftMenuItem(data: MenuItemV2) {
		await getClient().addDraftMenuItem(data)
		SummaryModalStore.getSummary(data.user.id)
		runInAction(() => (this.timestamp = Date.now()))
	}

	@action
	async dercrese(data: MenuItemV2) {
		await getClient().deleteMenuItem(data)
		SummaryModalStore.getSummary(data.user.id)
		runInAction(() => (this.timestamp = Date.now()))
	}
}

export default new DraftMenuItemStore()
