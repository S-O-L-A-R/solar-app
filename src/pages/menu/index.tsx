import React, { useState, useCallback } from 'react'
import { ACTIVE_MENU, INACTIVE_MENU } from 'mock'
import { Gap } from 'solarxui'
import MenuCard from 'components/MenuCard'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import SearchablePageWrapper from 'components/SearchablePageWrapper'
import CustomerMenuCard from 'components/CustomerMenuCard'
import ChefMenuCard from 'components/ChefMenuCard'
import PageContainer from 'components/PageContainer'
import SummaryModal from 'components/SummaryModal/index'
import OrderModal from 'components/OrderModal'

export default function Menu() {
	const [summaryModalOpen, setSummaryModalOpen] = useState(true)
	const closeSummaryModal = useCallback(() => {
		setSummaryModalOpen(false)
	}, [summaryModalOpen])
	const openSummaryModal = useCallback(() => {
		setSummaryModalOpen(true)
	}, [summaryModalOpen])
	return (
		<TableWrapper>
			<SummaryModal isOpen={summaryModalOpen} onClose={closeSummaryModal} />
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
				<PageButton onClick={openSummaryModal} />
			</SearchablePageWrapper>
			<OrderModal
				menuName="Gyu don"
				menuSubtitle="Rice bowl with grilled beef"
				image="https://img.blognone.com/jobs/prod/310x155/cover/flowaccount-co-ltd.jpg"
				price={199}
			/>
		</TableWrapper>
	)
}
