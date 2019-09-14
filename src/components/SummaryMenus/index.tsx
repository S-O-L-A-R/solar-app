import React, { useMemo } from 'react'
import SummaryMenuRow from 'components/SummaryMenuRow'
import { isEmpty } from 'lodash'
import { Separator } from 'solarxui'
import styled from 'styled-components'
import { MenuItem } from 'types/Menu'

interface Props {
	menus: MenuItem[]
}

const Container = styled.div`
	padding: 12px 0;
`

const MenuList = styled.div`
	overflow: scroll;
	max-height: calc(75vh - 64px - 32px - 24px - 40px - 38px - 28px);
`

const SummaryMenus = ({ menus }: Props) => {
	const totalAmount = useMemo(() => {
		return menus.reduce((sum, menu) => sum + menu.amount, 0)
	}, [menus])
	const totalPrice = useMemo(() => {
		return menus.reduce((sum, menu) => sum + menu.total, 0)
	}, [menus])
	if (isEmpty(menus)) {
		return null
	}
	return (
		<Container>
			<MenuList>
				{menus.map(menu => (
					<div>
						<SummaryMenuRow {...menu} />
						<Separator />
					</div>
				))}
			</MenuList>
			<div className="primary-text">
				<SummaryMenuRow name="Total" total={totalPrice} amount={totalAmount} />
			</div>
		</Container>
	)
}

export default SummaryMenus
