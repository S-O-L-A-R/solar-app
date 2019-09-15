import React, { useState, Fragment, ChangeEvent } from 'react'
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
import mliffx from 'mliffx'
import { TABLE_NUMBER } from 'mock'

interface EnhancedOrderUser extends User {
	quantity: number
}

function sumQauntity(users: EnhancedOrderUser[]) {
	return Object.values(
		users.reduce(
			(prev, curr) => {
				return {
					[curr.id]: prev[curr.id]
						? {
								...curr,
								quantity: curr.quantity + prev[curr.id].quantity,
						  }
						: curr,
				}
			},
			{} as { [key: string]: EnhancedOrderUser },
		),
	)
}

function grouping(id: string) {
	const data = DraftMenuItemsStore.menus.filter(({ menuId }) => menuId === id)
	const stat = data.reduce(
		(obj, curr) => {
			return {
				...obj,
				[curr.memo]: obj[curr.memo]
					? {
							memo: curr.memo,
							users: sumQauntity([
								{
									...curr.user,
									quantity: curr.quantity,
								},
								...obj[curr.memo].users,
							]),
					  }
					: { users: [{ ...curr.user, quantity: curr.quantity }], memo: curr.memo },
			}
		},
		{} as { [type: string]: { users: EnhancedOrderUser[]; memo: string } },
	)
	return Object.values(stat)
}

export default function OrderModal() {
	const [orderAmount, setOrderAmount] = useState(1)
	const [memo, setMemo] = useState('')

	const onIncrease = () => {
		setOrderAmount(orderAmount + 1)
	}

	const onDecrease = () => {
		if (orderAmount > 0) {
			setOrderAmount(orderAmount - 1)
		}
	}

	const onMemoChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMemo(e.target.value)
	}

	const onAddOrderToStore = async () => {
		await mliffx.getProfile()
		await DraftMenuItemsStore.addDraftMenuItem({
			menuId: get(OrderModalStore.menu, 'id', ''),
			quantity: orderAmount,
			memo: memo,
			tableId: TABLE_NUMBER,
			user: {
				id: get(mliffx.userProfile, ['value', 'data', 'userId']),
				name: get(mliffx.userProfile, ['value', 'data', 'userId']),
				avatarUrl: get(mliffx.userProfile, ['value', 'data', 'pictureUrl']),
			},
		})
		setOrderAmount(1)
		setMemo('')
		OrderModalStore.close()
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
					<InputField placeholder="No onion, non-veg..." onChange={onMemoChange} value={memo} />
					<Button onClick={onAddOrderToStore} disabled={orderAmount < 1}>
						Add
					</Button>
					{OrderModalStore.menu && grouping(get(OrderModalStore.menu, 'id', '')).length > 0 && (
						<Fragment>
							<Separator />
							{grouping(get(OrderModalStore.menu, 'id')).map(({ memo, users }) => (
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
