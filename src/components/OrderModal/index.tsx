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
import OrderModalStore from 'stores/OrderModalStore'
import DraftMenuItemsStore from 'stores/DraftMenuItemsStore'
import { User } from 'types/User'
import { useObserver } from 'mobx-react'
import { get } from 'lodash'

interface EnhancedOrderUser extends User {
	quantity: number
}

function grouping(id: string) {
	const data = DraftMenuItemsStore.menus.filter(({ menuId }) => menuId === id)
	const stat = data.reduce(
		(obj, curr) => {
			obj[curr.memo] = {
				memo: curr.memo,
				users: [
					{
						...curr.user,
						quantity: curr.quantity,
					},
					...obj[curr.memo].users,
				],
			} || { users: [], memo: '' }
			return obj
		},
		{} as { [type: string]: { users: EnhancedOrderUser[]; memo: string } },
	)
	return Object.values(stat)
}

export default function OrderModal() {
	const [orderAmount, setOrderAmount] = useState(1)

	const onIncrease = () => {
		setOrderAmount(orderAmount + 1)
	}

	const onDecrease = () => {
		if (orderAmount > 0) {
			setOrderAmount(orderAmount - 1)
		}
	}
	return useObserver(() => (
		<ImageModal
			src={get(OrderModalStore, 'menu.thumbnailUrl')}
			onClose={() => OrderModalStore.close()}
			isOpen={OrderModalStore.isOpen}>
			<StyledContainer>
				<StyledOrderDetail className="title">
					<StyledMenuName>{get(OrderModalStore, 'menu.name')}</StyledMenuName>
					{!!get(OrderModalStore, 'menu.desc') && (
						<StyledSubtitle className="gray2-text">{get(OrderModalStore, 'menu.desc')}</StyledSubtitle>
					)}
					<StyledItemPrice className="primary-text highlight">
						{get(OrderModalStore, 'menu.price')}
					</StyledItemPrice>
					<StyledNumberPickerContainer>
						<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={orderAmount} />
					</StyledNumberPickerContainer>
				</StyledOrderDetail>
				<Gap type="vertical" size="18px">
					<InputField placeholder="No onion, non-veg..." />
					<Button>Add</Button>
					{grouping(get(OrderModalStore, 'menu.desc')).length > 0 && (
						<Fragment>
							<Separator />
							{grouping(get(OrderModalStore, 'menu.desc')).map(({ memo, users }) => (
								<DraftMenuItem key={memo} memo={memo} users={users} amount={0} />
							))}
						</Fragment>
					)}
				</Gap>
			</StyledContainer>
		</ImageModal>
	))
}

OrderModal.defaultProps = {
	isOpen: false,
}
