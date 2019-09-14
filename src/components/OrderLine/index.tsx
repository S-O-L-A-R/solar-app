import React, { ReactNode } from 'react'
import { Gap } from 'solarxui'
import IHateYouContainer from 'components/IHateYouContainer'
import { localizedDurationFromNow } from 'utils/dateUtils'
import { Time, Detail, Desc, Sep } from './styled'
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
			<Sep>
				{title}
				<Time className="highlight">{localizedDurationFromNow(order.timestamp)}</Time>
			</Sep>
			{order.menus.map(menu => (
				<IHateYouContainer>
					<Detail className="highlight">
						<Gap size="8px">
							<div>
								<span>{menu.amount}</span>
								<span>{`/${menu.total}`}</span>
							</div>
							<Gap type="vertical" size="8px">
								<div>{menu.name}</div>
								{!isEmpty(menu.memo) && <Desc className="gray2-text">{menu.memo}</Desc>}
							</Gap>
						</Gap>
					</Detail>
					{plugin(menu)}
				</IHateYouContainer>
			))}
		</Gap>
	)
}
