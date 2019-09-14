import { observable, action, computed } from 'mobx'
import { Collection, Document } from 'firestorter'
import { Menu } from 'types/Menu'
import RestaurantStore from 'stores/RestaurantStore'

class MenusStore {
	@observable
	public menusCollection?: Collection<Document<Menu>>

	@action
	public setMenus() {
		if (!RestaurantStore.restaurant) return
		this.menusCollection = new Collection<Document<Menu>>(`${RestaurantStore.restaurant.path}/menus`)
	}

	@computed
	get menus() {
		if (!this.menusCollection || !this.menusCollection.hasDocs) return []
		return this.menusCollection.docs.map(({ data }) => data)
	}
}

export default new MenusStore()
