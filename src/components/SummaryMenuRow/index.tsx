import React from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

const MenuRowContainer = styled.div`
	display: flex;
	font-size: 18px;
	padding: 0 8px;
`

const Quantity = styled.div`
	flex: 1;
`

const NameContainer = styled.div`
	flex: 4;
	display: flex;
	flex-direction: column;
`

const PriceContainer = styled.div`
	flex: 4;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
`

const Memo = styled.div`
	font-size: 14px;
`

const SinglePrice = styled.div`
	font-size: 12px;
`

interface MenuRowProps {
	name: string
	amount: number
	quantity: number
	price?: number
	memo?: string
}

const SummaryMenuRow = ({ name, amount, price, memo, quantity }: MenuRowProps) => {
	return (
		<MenuRowContainer className="highlight">
			<Quantity>{`${quantity}x`}</Quantity>
			<NameContainer>
				<div>{name}</div>
				{!isEmpty(memo) && memo !== '-' && <Memo className="gray2-text">{memo}</Memo>}
			</NameContainer>
			<PriceContainer>
				<div>{amount}</div>
				{quantity > 1 && price && <SinglePrice className="gray2-text">{`(฿${price})`}</SinglePrice>}
			</PriceContainer>
		</MenuRowContainer>
	)
}

export default SummaryMenuRow
