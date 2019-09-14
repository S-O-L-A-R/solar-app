import React from 'react'
import { ClosableModal } from 'solarxui'
import styled from 'styled-components'
import SummaryMenuRow from 'components/SummaryMenuRow'

const Container = styled.div`
	padding: 0 21px;
	height: 100vh;
`

const menu = {
	name: 'Boba Milk Tea',
	quantity: 10,
	price: 100,
	memo: '200% Sweetness',
}

const SummaryModal = () => {
	return (
		<ClosableModal isOpen={true}>
			<Container>
				<span className="title">Summary</span>
				<SummaryMenuRow menu={menu} />
			</Container>
		</ClosableModal>
	)
}

export default SummaryModal
