import React, { ReactNode } from 'react'
import { Gap } from 'solarxui'
import IHateYouContainer from 'components/IHateYouContainer'
import { localizedDurationFromNow } from 'utils/dateUtils'
import { Time, Detail, Name, Desc } from './styled'
import { Order, MenuItem } from 'types'
import { isEmpty } from 'lodash'

interface Props {
	title: ReactNode
	plugin: (order: MenuItem) => ReactNode
	order: Order
}

export default function OrderLine({ title, plugin, order }: Props) {
	return (
		<Gap type="vertical" size="12px">
			<IHateYouContainer>
				{title}
				<Time className="highlight">{localizedDurationFromNow(order.timestamp)}</Time>
			</IHateYouContainer>
			{order.menus.map(menu => (
				<IHateYouContainer>
					<Detail className="highlight">
						<Name size="8px">
							<div>
								<span>{menu.amount}</span>
								<span>{`/${menu.total}`}</span>
							</div>
							<Gap type="vertical" size="8px">
								<div>{menu.name}</div>
								{!isEmpty(menu.memo) && <Desc className="gray-2-text">{menu.memo}</Desc>}
							</Gap>
						</Name>
					</Detail>
					{plugin(menu)}
				</IHateYouContainer>
			))}
		</Gap>
	)
}
