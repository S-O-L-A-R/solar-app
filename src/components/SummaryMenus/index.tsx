import React, { useMemo } from 'react'
import { MenuItem } from 'types'
import SummaryMenuRow from 'components/SummaryMenuRow'
import { isEmpty } from 'lodash'
import { Separator } from 'solarxui'
import styled from 'styled-components'

interface Props {
	menus: MenuItem[]
}

const Container = styled.div`
	padding: 16px 0;
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
			{menus.map(menu => (
				<div>
					<SummaryMenuRow {...menu} />
					<Separator />
				</div>
			))}
			<div className="primary-text">
				<SummaryMenuRow name="Total" total={totalPrice} amount={totalAmount} />
			</div>
		</Container>
	)
}

export default SummaryMenus
