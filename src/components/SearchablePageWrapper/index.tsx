import React, { ReactNode, ChangeEvent } from 'react'
import { SearchBox } from 'solarxui'
import { Body, SearchContainer } from './styled'

interface Props {
	placeholder: string
	children: ReactNode
	textFilter: string
	onTextFilterChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchablePageWrapper({ placeholder, children, onTextFilterChange, textFilter }: Props) {
	return (
		<Body type="vertical" size="20px">
			<SearchContainer>
				<SearchBox placeholder={placeholder} onChange={onTextFilterChange} value={textFilter} />
			</SearchContainer>
			{children}
		</Body>
	)
}
