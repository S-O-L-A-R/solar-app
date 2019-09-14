import React, { ReactNode } from 'react'
import MenuCard from 'components/MenuCard'
import { EditButton, DeleteButton, Gap } from 'solarxui'
import { Container } from './styled'
import { Menu } from 'types/Menu'
import CreateOrEditMenuStore from 'stores/CreateOrEditMenuStore'

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
						<EditButton onClick={() => CreateOrEditMenuStore.editMenu(menu)} size={32} />
						<DeleteButton size={32} />
					</Gap>
				</Container>
			}
		/>
	)
}
