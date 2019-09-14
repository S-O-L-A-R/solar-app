import React from 'react'
import { ClosableModal } from 'solarxui'
import styled from 'styled-components'
import SummaryMenus from 'components/SummaryMenus'
import RLPButton from 'components/RLPButton'

const Container = styled.div`
	padding: 0 21px;
	padding-bottom: 34px;
`

const menus = [
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
	{
		name: 'Boba Milk Tea',
		amount: 10,
		price: 100,
		total: 1000,
		memo: '200% Sweetness',
	},
]

const SummaryContainer = styled.div`
	position: relative;
	overflow: scroll;
	max-height: calc(75vh - 64px - 32px - 34px);
`

const ButtonContainer = styled.div`
	position: sticky;
	bottom: 0;
`

const SummaryModal = () => {
	return (
		<ClosableModal isOpen={true}>
			<Container>
				<span className="title">Summary</span>
				<SummaryContainer>
					<SummaryMenus menus={menus} />
					<ButtonContainer>
						<RLPButton />
					</ButtonContainer>
				</SummaryContainer>
			</Container>
		</ClosableModal>
	)
}

export default SummaryModal
