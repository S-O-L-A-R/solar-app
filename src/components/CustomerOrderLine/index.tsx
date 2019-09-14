import React from 'react'
import OrderLine from 'components/OrderLine'
import TableNo from 'components/TableNo'
import { Name, Price } from './styled'
import { Photo } from 'solarxui'
import { Order, MenuItem } from 'types'

interface Props {
	order: Order
}

const CustomerOrderLine = ({ order }: Props) => (
	<OrderLine
		title={
			<Name size="8px">
				<Photo src={order.user.thumbnail} size={24} alt="" variant="circle" />
			</Name>
		}
		plugin={menuItem => <Price>{`฿${menuItem.price * menuItem.amount}`}</Price>}
		order={order}
	/>
)

export default CustomerOrderLine
