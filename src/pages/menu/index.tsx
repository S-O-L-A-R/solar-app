import React from 'react'
import { ACTIVE_MENU, INACTIVE_MENU } from 'mock'
import { Gap } from 'solarxui'
import MenuCard from 'components/MenuCard'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import SearchablePageWrapper from 'components/SearchablePageWrapper'
import CustomerMenuCard from 'components/CustomerMenuCard'
import ChefMenuCard from 'components/ChefMenuCard'
import PageContainer from 'components/PageContainer'

export default function Menu() {
	return (
		<TableWrapper>
			<SearchablePageWrapper placeholder="Find your menu...">
				<PageContainer>
					<Gap type="vertical" size="20px">
						<MenuCard menu={ACTIVE_MENU} />
						<MenuCard menu={INACTIVE_MENU} />
						<CustomerMenuCard menu={ACTIVE_MENU} />
						<CustomerMenuCard menu={INACTIVE_MENU} />
						<ChefMenuCard menu={ACTIVE_MENU} />
						<ChefMenuCard menu={INACTIVE_MENU} />
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
				</PageContainer>
				<PageButton />
			</SearchablePageWrapper>
		</TableWrapper>
	)
}
