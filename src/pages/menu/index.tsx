import React from 'react'
import TableNo from 'components/TableNo'
import { SearchBox } from 'solarxui'
import { TABLE_NUMBER, ACTIVE_MENU, INACTIVE_MENU } from 'mock'
import { Gap } from 'solarxui'
import MenuCard from 'components/MenuCard'
import { Body, SearchContainer } from './styled'

export default function Menu() {
	return (
		<div>
			<TableNo tableName={TABLE_NUMBER} />
			<Body type="vertical" size="20px">
				<SearchContainer>
					<SearchBox placeholder="Find your menu..." />
				</SearchContainer>
				<Gap type="vertical" size="20px">
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
					<MenuCard menu={ACTIVE_MENU} />
					<MenuCard menu={INACTIVE_MENU} />
				</Gap>
			</Body>
		</div>
	)
}
