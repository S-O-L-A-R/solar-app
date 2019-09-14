import React, { useCallback, ChangeEvent, useState } from 'react'
import { ImageUploadModal } from 'solarxui'

interface Props {
	isOpen: boolean
}

const UploadMenuModal = ({ isOpen }: Props) => {
	const [image, setImage] = useState<string | null>(null)

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0]
			setImage(window.URL.createObjectURL(file))
		}
	}, [])

	if (!isOpen) return null
	return (
		<ImageUploadModal isOpen={isOpen} image={image} onChange={onChange}>
			a
		</ImageUploadModal>
	)
}

UploadMenuModal.defaultProps = {
	isOpen: false,
}

export default UploadMenuModal
