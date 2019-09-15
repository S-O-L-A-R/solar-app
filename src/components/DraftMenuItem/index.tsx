import React, { useState } from 'react'
import { StyledDraftMenuItemContainer, StyledMemo, StyledAmount } from './styled'
import { NumberPicker, Gap, Photo } from 'solarxui'
import useUser from 'hooks/useUser'
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
	const lineUser = useUser()
	const user = users.find(({ id }) => id === (lineUser && lineUser.userId))
	const [draftAmount, setdraftAmount] = useState(!!user ? get(user, 'quantity', 0) : 0)

	const onIncrease = async () => {
		setdraftAmount(draftAmount + 1)
		DraftMenuItemsStore.addDraftMenuItem({
			menuId: get(OrderModalStore.menu, 'id', ''),
			quantity: 1,
			memo: memo,
			tableId: TABLE_NUMBER,
			user: {
				id: lineUser.userId,
				name: lineUser.displayName,
				avatarUrl: lineUser.pictureUrl,
			},
		})
	}

	const onDecrease = async () => {
		if (draftAmount > 0) {
			setdraftAmount(draftAmount - 1)
			DraftMenuItemsStore.dercrese({
				menuId: get(OrderModalStore.menu, 'id', ''),
				quantity: 1,
				memo: memo,
				tableId: TABLE_NUMBER,
				user: {
					id: lineUser.userId,
					name: lineUser.displayName,
					avatarUrl: lineUser.pictureUrl,
				},
			})
		}
	}

	return (
		<StyledDraftMenuItemContainer>
			<StyledMemo>{memo || '-'}</StyledMemo>
			<StyledAmount>
				<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={draftAmount} />
			</StyledAmount>
			<StyledDiv>
				{users
					.filter(({ id }) => id !== (!!lineUser && lineUser.userId))
					.map(({ quantity, avatarUrl, name }) => (
						<T className="gray2-text" key={name}>
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
