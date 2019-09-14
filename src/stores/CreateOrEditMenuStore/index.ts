import ModalStore from 'stores/ModalStore'
import { observable, action } from 'mobx'
import { Menu } from 'types/Menu'
import { set } from 'lodash'

class CreateOrEditMenuStore extends ModalStore {
	@observable
	menu: Menu | undefined

	@action
	editMenu(menu: Menu) {
		this.menu = menu
		this.open()
	}

	@action
	createMenu() {
		this.menu = {
			id: '',
			name: '',
			desc: '',
			thumbnailUrl: '',
			price: 0,
			active: true,
		}
		this.open()
	}

	@action
	setState<T>(name: string, value: T) {
		if (this.menu) {
			set(this.menu, [name], value)
		}
	}

	@action
	reset() {
		this.menu = undefined
	}

	@action.bound
	submit() {
		console.log(this.menu)
	}
}

export default new CreateOrEditMenuStore()
