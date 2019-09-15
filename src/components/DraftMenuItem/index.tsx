import React, { useState } from 'react'
import { StyledDraftMenuItemContainer, StyledMemo, StyledAmount } from './styled'
import { NumberPicker, Gap, Photo } from 'solarxui'
import mliffx from 'mliffx'
import { get } from 'lodash'
import DraftMenuItemsStore from 'stores/DraftMenuItemsStore'
import { TABLE_NUMBER } from 'mock'
import { T, StyledDiv } from './styled'
import OrderModalStore from 'stores/OrderModalStore'

interface P {
	memo: string
	users: Array<{
		quantity: number
		avatarUrl: string
		name: string
		id: string
	}>
	amount: number
}

export default function DraftMenuItem({ memo, users }: P) {
	const user = users.find(({ id }) => id === get(mliffx, 'userProfile.value.data.userId'))
	const [draftAmount, setdraftAmount] = useState(user ? user.quantity : 0)

	const onIncrease = () => {
		setdraftAmount(draftAmount + 1)
		DraftMenuItemsStore.addDraftMenuItem({
			menuId: get(OrderModalStore.menu, 'id', ''),
			quantity: 1,
			memo: memo,
			tableId: TABLE_NUMBER,
			user: {
				id: get(mliffx.userProfile, ['value', 'data', 'userId']),
				name: get(mliffx.userProfile, ['value', 'data', 'userId']),
				avatarUrl: get(mliffx.userProfile, ['value', 'data', 'pictureUrl']),
			},
		})
	}

	const onDecrease = () => {
		if (draftAmount > 0) {
			setdraftAmount(draftAmount - 1)
			DraftMenuItemsStore.dercrese({
				menuId: get(OrderModalStore.menu, 'id', ''),
				quantity: 1,
				memo: memo,
				tableId: TABLE_NUMBER,
				user: {
					id: get(mliffx.userProfile, ['value', 'data', 'userId']),
					name: get(mliffx.userProfile, ['value', 'data', 'userId']),
					avatarUrl: get(mliffx.userProfile, ['value', 'data', 'pictureUrl']),
				},
			})
		}
	}

	return (
		<StyledDraftMenuItemContainer>
			<StyledMemo>{memo}</StyledMemo>
			<StyledAmount>
				<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={draftAmount} />
			</StyledAmount>
			<StyledDiv>
				{users
					.filter(({ id }) => id !== get(mliffx, 'userProfile.value.data.userId'))
					.map(({ quantity, avatarUrl, name }) => (
						<T className="gray2-text">
							<Gap size="8px">
								<div>{`${quantity}x`}</div>
								<Photo size={16} variant="circle" src={avatarUrl} />
								<div>{name}</div>
							</Gap>
						</T>
					))}
			</StyledDiv>
		</StyledDraftMenuItemContainer>
	)
}
