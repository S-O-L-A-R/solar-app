import React, { ReactNode } from 'react'
import MenuCard from 'components/MenuCard'
import { EditButton, DeleteButton, Gap } from 'solarxui'
import { Container } from './styled'
import { Menu } from 'types/Menu'

interface Props {
	menu: Menu
	plugins?: ReactNode
}

export default function CMC({ menu }: Props) {
	return (
		<MenuCard
			menu={menu}
			plugins={
				<Container>
					<Gap size="8px">
						<EditButton size={32} />
						<DeleteButton size={32} />
					</Gap>
				</Container>
			}
		/>
	)
}
