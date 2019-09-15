import React from 'react'
import MenuCard from 'components/MenuCard'
import { PlusButton, Photo, Gap } from 'solarxui'
import { Container, UsersContainer, Number } from './styled'
import { Menu } from 'types/Menu'
import DraftMenuItemStore from 'stores/DraftMenuItemsStore'
import { User } from 'types/User'
import useUser from 'hooks/useUser'
import { useObserver } from 'mobx-react'
import OrderModalStore from 'stores/OrderModalStore'
interface Props {
	menu: Menu
	tableId: string
	hot?: boolean
	recommended?: boolean
}

const IdiotBadge = ({ user, quantity }: { user: User; quantity: number }) => {
	const lineUser = useUser()
	return useObserver(() => (
		<Gap size="8px">
			<Photo src={user.avatarUrl} alt="" variant="circle" size={16} />
			<Number
				className={
					user.id === (lineUser && lineUser.userId) ? 'primary-text bold' : 'gray2-text'
				}>{`x${quantity}`}</Number>
		</Gap>
	))
}

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

export default function SMC({ menu, tableId, hot, recommended }: Props) {
	return useObserver(() => (
		<MenuCard
			hot={hot}
			recommended={recommended}
			menu={menu}
			onClick={() => OrderModalStore.setMenuModal(menu)}
			plugins={
				<Container>
					<UsersContainer>
						{getGroupData(tableId, menu).map(({ user, quantity }) => (
							<IdiotBadge key={`${tableId}-${Math.random() * 100}`} user={user} quantity={quantity} />
						))}
					</UsersContainer>
					<PlusButton size={32} />
				</Container>
			}
		/>
	))
}
