import React, { useState, useCallback, ChangeEvent, useEffect } from 'react'
import { Gap } from 'solarxui'
import ChefMenuCard from 'components/ChefMenuCard'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import SearchablePageWrapper from 'components/SearchablePageWrapper'
import PageContainer from 'components/PageContainer'
import { Menu } from 'types/Menu'
import UploadMenuModal from 'components/UploadMenuModal'
import MenusStore from 'stores/MenusStore'
import { useObserver } from 'mobx-react'

export default function MenuPage() {
	const [filterText, setFilterText] = useState('')

	const onTextFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterText(e.target.value)
	}

	const [uploadModalOpen, setUploadModalOpen] = useState(false)
	const closeUploadModal = useCallback(() => {
		setUploadModalOpen(false)
	}, [])
	const openUploadModal = useCallback(() => {
		setUploadModalOpen(true)
	}, [])

	useEffect(() => {
		MenusStore.setMenus()
	}, [])

	return useObserver(() => (
		<TableWrapper>
			<UploadMenuModal isOpen={uploadModalOpen} onClose={closeUploadModal} />
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
								<ChefMenuCard key={`${item.name}-${Math.random()}`} menu={item} />
							))}
					</Gap>
				</PageContainer>
				<PageButton onClick={openUploadModal} />
			</SearchablePageWrapper>
		</TableWrapper>
	))
}
