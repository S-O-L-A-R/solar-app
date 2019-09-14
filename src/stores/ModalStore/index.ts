import { observable, action } from 'mobx'

class ModalStore {
	@observable
	public isOpen: boolean = false

	@action.bound
	public open() {
		this.isOpen = true
	}

	@action.bound
	public close() {
		this.isOpen = false
	}
}

export default ModalStore
