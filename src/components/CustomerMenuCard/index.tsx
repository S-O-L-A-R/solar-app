import React from 'react'
import MenuCard from 'components/MenuCard'
import { PlusButton, Photo, Gap } from 'solarxui'
import { Container, UsersContainer, Number } from './styled'
import { Menu } from 'types/Menu'
import DraftMenuItemStore from 'stores/DraftMenuItemsStore'
import { User } from 'types/User'
import mliffx from 'mliffx'
import { useObserver } from 'mobx-react'
import { get } from 'lodash'
import OrderModalStore from 'stores/OrderModalStore'

interface Props {
	menu: Menu
	tableId: string
}

const IdiotBadge = ({ user, quantity }: { user: User; quantity: number }) =>
	useObserver(() => (
		<Gap size="8px">
			<Photo src={user.avatarUrl} alt="" variant="circle" size={16} />
			<Number
				className={
					user.id === get(mliffx, ['userProfile', 'value', 'data', 'userId'])
						? 'primary-text bold'
						: 'gray2-text'
				}>{`x${quantity}`}</Number>
		</Gap>
	))

function getGroupData(tableId: string, menu: Menu) {
	const data = DraftMenuItemStore.menus.filter(({ tableId: tid, menuId }) => tableId === tid && menuId === menu.id)
	const users = {} as { [key: string]: User }
	const stat = data.reduce(
		(obj: { [key: string]: number }, curr) => {
			obj[curr.user.id] = obj[curr.user.id] ? obj[curr.user.id] + curr.quantity : curr.quantity
			users[curr.user.id] = curr.user
			return obj
		},
		{} as { [key: string]: number },
	)
	return Object.keys(stat).map(key => ({
		user: users[key],
		quantity: stat[key],
	}))
}

export default function SMC({ menu, tableId }: Props) {
	return useObserver(() => (
		<MenuCard
			menu={menu}
			onClick={() => OrderModalStore.setMenuModal(menu)}
			plugins={
				<Container>
					<UsersContainer>
						{getGroupData(tableId, menu).map(({ user, quantity }) => (
							<IdiotBadge user={user} quantity={quantity} />
						))}
					</UsersContainer>
					<PlusButton size={32} />
				</Container>
			}
		/>
	))
}
