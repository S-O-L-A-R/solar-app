import React from 'react'
import OrderLine from 'components/OrderLine'
import { Name, Price } from './styled'
import { Photo } from 'solarxui'
import { Order } from 'types'

interface Props {
	order: Order
}

const CustomerOrderLine = ({ order }: Props) => (
	<OrderLine
		title={
			<Name size="8px">
				<Photo src={order.user.thumbnail} size={24} alt="" variant="circle" />
				<div>{order.user.name}</div>
			</Name>
		}
		plugin={menuItem => <Price>{`฿${menuItem.price * menuItem.amount}`}</Price>}
		order={order}
	/>
)

export default CustomerOrderLine
