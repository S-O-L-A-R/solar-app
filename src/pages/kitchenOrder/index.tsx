import React from 'react'
// import { Gap } from 'solarxui'
import PageButton from 'components/PageButton'
import PageContainer from 'components/PageContainer'
import useLink from 'hooks/useLink'
import { MOCK_ORDER } from 'mock'
import CustomerOrderLine from 'components/CustomerOrderLine'
import StaffOrderLine from 'components/StaffOrderLine'
import SimpleTextWrapper from 'components/SimpleTextWrapper'

export default function Order() {
	const link = useLink('/menu')
	return (
		<SimpleTextWrapper text="kitchen">
			<PageContainer>
				<CustomerOrderLine order={MOCK_ORDER} />
				<StaffOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<StaffOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<StaffOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
				<CustomerOrderLine order={MOCK_ORDER} />
			</PageContainer>
			<PageButton onClick={link}>Menu</PageButton>
		</SimpleTextWrapper>
	)
}
