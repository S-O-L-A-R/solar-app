import React, { useEffect, useState, useCallback, ChangeEvent } from 'react'
import { Gap } from 'solarxui'
import CustomerMenuCard from 'components/CustomerMenuCard'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import SearchablePageWrapper from 'components/SearchablePageWrapper'
import PageContainer from 'components/PageContainer'
import SummaryModal from 'components/SummaryModal/index'
import OrderModal from 'components/OrderModal'
import { Menu } from 'types/Menu'
import MenusStore from 'stores/MenusStore'
import { useObserver } from 'mobx-react'
import DraftMenuItemStore from 'stores/DraftMenuItemsStore'
import { TABLE_NUMBER } from 'mock'

export default function MenuPage() {
	const [summaryModalOpen, setSummaryModalOpen] = useState(false)
	const [filterText, setFilterText] = useState('')

	const onTextFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterText(e.target.value)
	}

	const closeSummaryModal = useCallback(() => {
		setSummaryModalOpen(false)
	}, [])

	const openSummaryModal = useCallback(() => {
		setSummaryModalOpen(true)
	}, [])

	useEffect(() => {
		MenusStore.setMenus()
		DraftMenuItemStore.setDraftMenuItems()
	}, [])
	return useObserver(() => (
		<TableWrapper>
			<OrderModal />
			<SummaryModal isOpen={summaryModalOpen} onClose={closeSummaryModal} />
			<SearchablePageWrapper
				onTextFilterChange={onTextFilterChange}
				textFilter={filterText}
				placeholder="Find your menu...">
				<PageContainer>
					<Gap type="vertical" size="20px">
						{MenusStore.menus
							.filter(
								(menu: Menu) =>
									menu.name.toLowerCase().includes(filterText.toLowerCase()) ||
									menu.desc.toLowerCase().includes(filterText.toLowerCase()),
							)
							.map(item => (
								<CustomerMenuCard
									key={`${item.name}-${Math.random()}`}
									menu={item}
									tableId={TABLE_NUMBER}
								/>
							))}
					</Gap>
				</PageContainer>
				<PageButton onClick={openSummaryModal} />
			</SearchablePageWrapper>
		</TableWrapper>
	))
}
