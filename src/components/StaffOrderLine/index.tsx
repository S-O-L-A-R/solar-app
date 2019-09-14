import React from 'react'
import OrderLine from 'components/OrderLine'
import { Button, Gap, UndoButton } from 'solarxui'
import { ButtonContainer, TableName } from './styled'

interface Props {
	order: Order
}

export default function SOL({ order }: Props) {
	return (
		<OrderLine
			order={order}
			title={<TableName tableName={order.table} />}
			staff
			plugin={menuItem =>
				menuItem.amount < menuItem.total && (
					<Gap size="8px">
						<ButtonContainer>
							<Button className="small" height={24}>
								Done
							</Button>
						</ButtonContainer>
						<UndoButton size={24} />
					</Gap>
				)
			}
		/>
	)
}
