import React, { useCallback, ChangeEvent, useState, useEffect } from 'react'
import { ImageUploadModal, InputField, TextArea, Gap, Switch, Button } from 'solarxui'
import styled from 'styled-components'
import CreateOrEditMenuStore from 'stores/CreateOrEditMenuStore'
import { useObserver } from 'mobx-react'
import { get } from 'lodash'

const FormContainer = styled(Gap)`
	padding: 24px;
	padding-bottom: 38px;
	overflow: scroll;
	max-height: calc(75vh - 210px - 24px - 38px);
`

const SwitchContainer = styled.div`
	width: 100px;
`

const ButtonContainer = styled.div`
	padding-top: 4px;
`

const UploadMenuModal = () => {
	const [image, setImage] = useState<string | null>(null)
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0]
			setImage(window.URL.createObjectURL(file))
		}
	}, [])
	useEffect(() => {
		return () => {
			CreateOrEditMenuStore.reset()
		}
	}, [])
	const onFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		CreateOrEditMenuStore.setState(e.target.name, e.target.value)
	}, [])
	const onTAC = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
		CreateOrEditMenuStore.setState(e.target.name, e.target.value)
	}, [])
	const onActive = useCallback(({ active }) => CreateOrEditMenuStore.setState('active', active), [])
	return useObserver(() => (
		<ImageUploadModal
			isOpen={CreateOrEditMenuStore.isOpen}
			image={image || get(CreateOrEditMenuStore, 'menu.thumbnailUrl')}
			onChange={onChange}
			onClose={CreateOrEditMenuStore.close}>
			<FormContainer size="16px" type="vertical">
				<InputField name="name" onChange={onFieldChange} value={get(CreateOrEditMenuStore, 'menu.name')} />
				<InputField
					placeholder="Price"
					name="price"
					type="number"
					onChange={onFieldChange}
					value={get(CreateOrEditMenuStore, 'menu.price')}
				/>
				<TextArea name="desc" onChange={onTAC} value={get(CreateOrEditMenuStore, 'menu.desc')} />
				<SwitchContainer>
					<Switch onChange={onActive} activeDefault={get(CreateOrEditMenuStore, 'menu.active')} />
				</SwitchContainer>
				<ButtonContainer>
					<Button onClick={CreateOrEditMenuStore.submit}>Add</Button>
				</ButtonContainer>
			</FormContainer>
		</ImageUploadModal>
	))
}

UploadMenuModal.defaultProps = {
	isOpen: false,
}

export default UploadMenuModal
