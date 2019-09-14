import React from 'react'
import { ClosableModal } from 'solarxui'
import styled from 'styled-components'
import SummaryMenus from 'components/SummaryMenus'
import RLPButton from 'components/RLPButton'
import { OrderItem } from 'types/Order'

const Container = styled.div`
	padding: 0 21px;
	padding-bottom: 38px;
`

interface Props {
	isOpen: boolean
	onClose: () => void
	order: OrderItem | null
}

const SummaryModal = ({ isOpen, onClose, order }: Props) => {
	if (!order) {
		return null
	}
	return (
		<ClosableModal isOpen={isOpen} onClose={onClose}>
			<Container>
				<span className="title">Summary</span>
				<SummaryMenus menuItems={order.items} />
				<RLPButton />
			</Container>
		</ClosableModal>
	)
}

SummaryModal.defaultProps = {
	isOpen: false,
}

export default SummaryModal
