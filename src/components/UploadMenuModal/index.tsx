import React, { useCallback, ChangeEvent, useState } from 'react'
import { ImageUploadModal, InputField, TextArea, Gap, Switch, Button } from 'solarxui'
import styled from 'styled-components'

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

interface Props {
	isOpen: boolean
	onClose: () => void
}

const UploadMenuModal = ({ isOpen, onClose }: Props) => {
	const [image, setImage] = useState<string | null>(null)
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0]
			setImage(window.URL.createObjectURL(file))
		}
	}, [])
	return (
		<ImageUploadModal isOpen={isOpen} image={image} onChange={onChange} onClose={onClose}>
			<FormContainer size="16px" type="vertical">
				<InputField />
				<InputField placeholder="Price" />
				<TextArea />
				<SwitchContainer>
					<Switch />
				</SwitchContainer>
				<ButtonContainer>
					<Button>Add</Button>
				</ButtonContainer>
			</FormContainer>
		</ImageUploadModal>
	)
}

UploadMenuModal.defaultProps = {
	isOpen: false,
}

export default UploadMenuModal
