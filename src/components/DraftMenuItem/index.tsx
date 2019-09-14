import React, { useState } from 'react'
import { StyledDraftMenuItemContainer, StyledMemo, StyledAmount } from './styled'
import { NumberPicker } from 'solarxui'
import { DraftMenuItemType } from 'types/Menu'

export default function DraftMenuItem({ memo, amount, user }: DraftMenuItemType) {
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
			<StyledMemo>{memo}</StyledMemo>
			<StyledAmount>
				<NumberPicker onIncrease={onIncrease} onDecrease={onDecrease} value={draftAmount} />
			</StyledAmount>
		</StyledDraftMenuItemContainer>
	)
}