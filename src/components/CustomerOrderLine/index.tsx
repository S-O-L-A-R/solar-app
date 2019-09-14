import React from 'react'
import OrderLine from 'components/OrderLine'
import { Name, Price } from './styled'
import { Photo } from 'solarxui'
import { Order } from 'types/Order'

interface Props {
	order: Order
}

const CustomerOrderLine = ({ order }: Props) => (
	<OrderLine
		title={
			<Name size="8px">
				<Photo src={order.user.avatarUrl} size={24} alt="" variant="circle" />
				<div>{order.user.name}</div>
			</Name>
		}
		plugin={menuItem => (
			<Price className={menuItem.amount === menuItem.total ? 'primary-text' : ''}>{`฿${menuItem.price *
				menuItem.total}`}</Price>
		)}
		order={order}
	/>
)

export default CustomerOrderLine
