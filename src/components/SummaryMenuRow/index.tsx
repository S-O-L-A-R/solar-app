import React from 'react'
import styled from 'styled-components'
import { Menu } from 'types'

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
	menu: Menu
}

const SummaryMenuRow = ({ menu }: MenuRowProps) => {
	const { name, quantity, price, memo } = menu
	return (
		<MenuRowContainer className="highlight">
			<Quantity>{`${quantity}x`}</Quantity>
			<NameContainer>
				<div>{name}</div>
				{memo && <Memo className="gray2-text">{memo}</Memo>}
			</NameContainer>
			<PriceContainer>
				<div>{price * quantity}</div>
				{quantity > 1 && <SinglePrice className="gray2-text">{`(฿${price})`}</SinglePrice>}
			</PriceContainer>
		</MenuRowContainer>
	)
}

export default SummaryMenuRow
