import React from 'react'
// import { Gap } from 'solarxui'
import PageButton from 'components/PageButton'
import TableWrapper from 'components/TableWrapper'
import PageContainer from 'components/PageContainer'
import useLink from 'hooks/useLink'
import { MOCK_ORDER } from 'mock'
import CustomerOrderLine from 'components/CustomerOrderLine'

export default function Order() {
	const link = useLink('/menu')
	return (
		<TableWrapper>
			<PageContainer>
				<CustomerOrderLine order={MOCK_ORDER} />
			</PageContainer>
			<PageButton onClick={link}>Menu</PageButton>
		</TableWrapper>
	)
}
