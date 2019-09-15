import React from 'react'
import { ClosableModal } from 'solarxui'
import styled from 'styled-components'
import SummaryMenus from 'components/SummaryMenus'
import RLPButton from 'components/RLPButton'
import SummaryModalStore from 'stores/SummaryModalStore'
import { get } from 'lodash'
import { useObserver } from 'mobx-react'

const Container = styled.div`
	padding: 0 21px;
	padding-bottom: 38px;
`

const SummaryModal = () => {
	return useObserver(() => (
		<ClosableModal isOpen={SummaryModalStore.isOpen} onClose={() => SummaryModalStore.close()}>
			<Container>
				<span className="title">Summary</span>
				<SummaryMenus menuItems={Object.values(get(SummaryModalStore, 'order.items', {}))} />
				<RLPButton />
			</Container>
		</ClosableModal>
	))
}

export default SummaryModal
