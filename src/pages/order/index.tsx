import React from 'react'
// import { Gap } from 'solarxui'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import PageContainer from 'components/PageContainer'
import useLink from 'hooks/useLink'

export default function Order() {
	const link = useLink('/menu')
	return (
		<TableWrapper>
			<PageContainer />
			<PageButton onClick={link}>Menu</PageButton>
		</TableWrapper>
	)
}
