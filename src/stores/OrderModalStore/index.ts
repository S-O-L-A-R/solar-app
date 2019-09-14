import ModalStore from 'stores/ModalStore'
import { observable, action } from 'mobx'
import { Menu } from 'types/Menu'

class OrderModalStore extends ModalStore {
	@observable
	menu: Menu | undefined

	@action.bound
	public setMenuModal(menu: Menu) {
		this.menu = menu
		this.open()
	}
}

export default new OrderModalStore()
