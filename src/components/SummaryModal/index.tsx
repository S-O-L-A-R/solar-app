import React from 'react'
import { ClosableModal } from 'solarxui'
import styled from 'styled-components'
import SummaryMenus from 'components/SummaryMenus'
import RLPButton from 'components/RLPButton'

const Container = styled.div`
	padding: 0 21px;
	padding-bottom: 38px;
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

interface Props {
	isOpen: boolean
	onClose: () => void
}

const SummaryModal = ({ isOpen, onClose }: Props) => {
	return (
		<ClosableModal isOpen={isOpen} onClose={onClose}>
			<Container>
				<span className="title">Summary</span>
				<SummaryMenus menus={menus} />
				<RLPButton />
			</Container>
		</ClosableModal>
	)
}

SummaryModal.defaultProps = {
	isOpen: false,
}

export default SummaryModal
