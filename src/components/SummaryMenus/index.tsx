import React, { useMemo } from 'react'
import SummaryMenuRow from 'components/SummaryMenuRow'
import { isEmpty } from 'lodash'
import { Separator } from 'solarxui'
import styled from 'styled-components'
import { MenuItemV3 } from 'types/Menu'

interface Props {
	menuItems: MenuItemV3[]
}

const Container = styled.div`
	padding: 12px 0;
`

const MenuList = styled.div`
	overflow: scroll;
	max-height: calc(75vh - 64px - 32px - 24px - 40px - 38px - 28px);
`

const SummaryMenus = ({ menuItems }: Props) => {
	const totalQuantity = useMemo(() => {
		return menuItems.reduce((sum, menuItem) => sum + menuItem.quantity, 0)
	}, [menuItems])
	const totalAmount = useMemo(() => {
		return menuItems.reduce((sum, menuItem) => sum + menuItem.amount, 0)
	}, [menuItems])
	if (isEmpty(menuItems)) {
		return null
	}
	return (
		<Container>
			<MenuList>
				{menuItems.map(menuItem => (
					<div key={menuItem.menu.id}>
						<SummaryMenuRow
							name={menuItem.menu.name}
							price={menuItem.unitPrice}
							quantity={menuItem.quantity}
							amount={menuItem.amount}
							memo={menuItem.memo}
						/>
						<Separator />
					</div>
				))}
			</MenuList>
			<div className="primary-text">
				<SummaryMenuRow name="Total" amount={totalAmount} quantity={totalQuantity} />
			</div>
		</Container>
	)
}

export default SummaryMenus
