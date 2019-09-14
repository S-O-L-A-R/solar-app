import React, { useState } from 'react'
import { StyledDraftMenuItemContainer, StyledMemo, StyledAmount } from './styled'
import { NumberPicker, Gap, Photo } from 'solarxui'
import { T } from './styled'

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

export default function DraftMenuItem({ memo, users, amount }: P) {
	const [draftAmount, setdraftAmount] = useState(amount)

	const onIncrease = () => {
		setdraftAmount(draftAmount + 1)
	}

	const onDecrease = () => {
		if (draftAmount > 0) {
			setdraftAmount(draftAmount - 1)
		}
	}

	return (
		<StyledDraftMenuItemContainer>
			<div>
				<StyledMemo>{memo}</StyledMemo>
				<StyledAmount>
					<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={draftAmount} />
				</StyledAmount>
			</div>
			{users.map(({ quantity, avatarUrl, name }) => (
				<T className="gray2-text">
					<Gap size="8px">
						<div>{`${quantity}x`}</div>
						<Photo size={16} variant="circle" src={avatarUrl} />
						<div>{name}</div>
					</Gap>
				</T>
			))}
		</StyledDraftMenuItemContainer>
	)
}
