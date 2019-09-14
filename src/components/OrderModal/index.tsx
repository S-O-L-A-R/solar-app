import React, { useState, Fragment } from 'react'
import { ImageModal, NumberPicker, InputField, Button, Gap, Separator } from 'solarxui'
import {
	StyledOrderDetail,
	StyledContainer,
	StyledMenuName,
	StyledSubtitle,
	StyledItemPrice,
	StyledNumberPickerContainer,
} from './styled'
import DraftMenuItem from 'components/DraftMenuItem'

interface Props {
	menuName: string
	menuSubtitle?: string
	image: string
	price: number
	draftMenuItems?: DraftMenuItem[]
}

export default function OrderModal({ image, menuName, menuSubtitle, price, draftMenuItems }: Props) {
	const [isOpen, setIsOpen] = useState(true)
	const [orderAmount, setOrderAmount] = useState(1)

	const onIncrease = () => {
		setOrderAmount(orderAmount + 1)
	}

	const onDecrease = () => {
		if (orderAmount > 0) {
			setOrderAmount(orderAmount - 1)
		}
	}

	const onClose = () => {
		setIsOpen(false)
	}

	if (!isOpen) {
		return null
	}

	return (
		<ImageModal src={image} onClose={onClose} isOpen={isOpen}>
			<StyledContainer>
				<StyledOrderDetail className="title">
					<StyledMenuName>{menuName}</StyledMenuName>
					{!!menuSubtitle && <StyledSubtitle className="gray2-text">{menuSubtitle}</StyledSubtitle>}
					<StyledItemPrice className="primary-text">{price}</StyledItemPrice>
					<StyledNumberPickerContainer>
						<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={orderAmount} />
					</StyledNumberPickerContainer>
				</StyledOrderDetail>
				<Gap type="vertical" size="18px">
					<InputField placeholder="No onion, non-veg..." />
					<Button>Add</Button>
					{!!draftMenuItems && draftMenuItems.length > 0 && (
						<Fragment>
							<Separator />
							{draftMenuItems.map(({ memo, amount, user }) => (
								<DraftMenuItem key={memo} memo={memo} amount={amount} user={user} />
							))}
						</Fragment>
					)}
				</Gap>
			</StyledContainer>
		</ImageModal>
	)
}
