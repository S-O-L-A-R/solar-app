import React, { ReactNode } from 'react'
import MenuCard from 'components/MenuCard'
import { Menu } from 'types'
import { PlusButton } from 'solarxui'
import { Container, UsersContainer } from './styled'

interface Props {
	menu: Menu
	plugins?: ReactNode
}

export default function SMC({ menu }: Props) {
	return (
		<MenuCard
			menu={menu}
			plugins={
				<Container>
					<UsersContainer />
					<PlusButton size={32} />
				</Container>
			}
		/>
	)
}
