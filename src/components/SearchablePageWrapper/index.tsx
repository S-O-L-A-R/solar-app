import React, { ReactNode } from 'react'
import { SearchBox } from 'solarxui'
import { Body, SearchContainer } from './styled'

interface Props {
	placeholder: string
	children: ReactNode
}

export default function SearchablePageWrapper({ placeholder, children }: Props) {
	return (
		<Body type="vertical" size="20px">
			<SearchContainer>
				<SearchBox placeholder={placeholder} />
			</SearchContainer>
			{children}
		</Body>
	)
}
