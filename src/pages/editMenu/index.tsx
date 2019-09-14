import React, { useState, useCallback, ChangeEvent } from 'react'
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
import { Menu } from 'types/Menu'

export default function Menu() {
	const [summaryModalOpen, setSummaryModalOpen] = useState(true)
	const [filterText, setFilterText] = useState('')

	const closeSummaryModal = useCallback(() => {
		setSummaryModalOpen(false)
	}, [])

	const openSummaryModal = useCallback(() => {
		setSummaryModalOpen(true)
	}, [])

	const onTextFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterText(e.target.value)
	}

	return (
		<TableWrapper>
			<SummaryModal isOpen={summaryModalOpen} onClose={closeSummaryModal} />
			<SearchablePageWrapper
				placeholder="Find your menu..."
				textFilter={filterText}
				onTextFilterChange={onTextFilterChange}>
				<PageContainer>
					<Gap type="vertical" size="20px">
						{[ACTIVE_MENU, INACTIVE_MENU]
							.filter(
								(menu: Menu) =>
									menu.name.toLowerCase().includes(filterText.toLowerCase()) ||
									menu.desc.toLowerCase().includes(filterText.toLowerCase()),
							)
							.map(item => (
								<MenuCard key={`${item.name}-${Math.random()}`} menu={item} />
							))}
					</Gap>
				</PageContainer>
				<PageButton onClick={openSummaryModal} />
			</SearchablePageWrapper>
			<OrderModal
				menuName="Gyu don"
				menuSubtitle="Rice bowl with grilled beef"
				image="https://img.blognone.com/jobs/prod/310x155/cover/flowaccount-co-ltd.jpg"
				price={199}
				draftMenuItems={[
					{
						amount: 1,
						memo: 'Add more egg',
						user: {
							name: 'Phasin',
							avatar: '',
						},
					},
				]}
			/>
		</TableWrapper>
	)
}
