import React, { ReactNode } from 'react'
import { Gap } from 'solarxui'
import IHateYouContainer from 'components/IHateYouContainer'
import { localizedDurationFromNow } from 'utils/dateUtils'
import { Time, Detail, Desc, Sep, Wrapper } from './styled'
import { isEmpty } from 'lodash'
import cn from 'classnames'
import { MenuItem } from 'types/Menu'
import { Order } from 'types/Order'

interface Props {
	title: ReactNode
	plugin: (order: MenuItem) => ReactNode
	order: Order
	staff?: boolean
}

export default function OrderLine({ title, plugin, order, staff }: Props) {
	return (
		<Wrapper>
			<Gap type="vertical" size="12px">
				<Sep>
					{title}
					<Time className="highlight">{localizedDurationFromNow(order.timestamp)}</Time>
				</Sep>
				{order.menus.map(menu => (
					<IHateYouContainer>
						<Detail className={cn('highlight', staff && menu.amount === menu.total ? 'grayscale' : '')}>
							<Gap size="8px">
								<div className={menu.amount === menu.total ? 'primary-text' : ''}>
									<span className={menu.amount > 0 ? 'primary-text' : ''}>{menu.amount}</span>
									<span>{`/${menu.total}`}</span>
								</div>
								<div>
									<div className={menu.amount === menu.total ? 'primary-text' : ''}>{menu.name}</div>
									{!isEmpty(menu.memo) && <Desc className="gray2-text">{menu.memo}</Desc>}
								</div>
							</Gap>
						</Detail>
						{plugin(menu)}
					</IHateYouContainer>
				))}
			</Gap>
		</Wrapper>
	)
}
