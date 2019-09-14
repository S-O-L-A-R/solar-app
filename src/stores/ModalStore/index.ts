import { observable, action } from 'mobx'

class ModalStore {
	@observable
	public isOpen: boolean = false

	@action
	public open() {
		this.isOpen = true
	}

	@action
	public close() {
		this.isOpen = false
	}
}

export default ModalStore
