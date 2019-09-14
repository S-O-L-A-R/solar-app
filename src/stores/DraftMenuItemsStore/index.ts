import { observable, action, computed } from 'mobx'
import { Collection, Document } from 'firestorter'
import { MenuItemV2 } from 'types/Menu'
import RestaurantStore from 'stores/RestaurantStore'

class MenusStore {
	@observable
	public menusCollection?: Collection<Document<MenuItemV2>>

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
}

export default new MenusStore()
