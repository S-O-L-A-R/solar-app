import React, { useEffect, useState, ChangeEvent } from 'react'
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
import SummaryModalStore from 'stores/SummaryModalStore'
import useUser from 'hooks/useUser'

export default function MenuPage() {
	const [filterText, setFilterText] = useState('')
	const lineUser = useUser()
	const onTextFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterText(e.target.value)
	}

	useEffect(() => {
		MenusStore.setMenus()
		DraftMenuItemStore.setDraftMenuItems()
	}, [])

	useEffect(() => {
		SummaryModalStore.getSummary(lineUser.userId)
	}, [lineUser.userId, DraftMenuItemStore.timestamp]) // eslint-disable-line

	return useObserver(() => {
		return (
			<TableWrapper>
				<SummaryModal />
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
								.map((item, index) => (
									<CustomerMenuCard
										key={`${item.name}-${Math.random() * 100}`}
										menu={item}
										tableId={TABLE_NUMBER}
										hot={index < 2}
										recommended={index === 2}
									/>
								))}
						</Gap>
					</PageContainer>
					{SummaryModalStore.order && (
						<PageButton
							key={Math.random() * 100}
							onClick={() =>
								SummaryModalStore.open()
							}>{`฿${SummaryModalStore.order.total.amount} Order`}</PageButton>
					)}
				</SearchablePageWrapper>
				<OrderModal />
			</TableWrapper>
		)
	})
}
