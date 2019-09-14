import React, { HTMLAttributes } from 'react'
import { Button, Gap } from 'solarxui'
import RLPIcon from 'icons/rlp'
import styled from 'styled-components'

const Container = styled(Gap)`
	display: flex;
	justify-content: center;
	align-items: center;
`

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const RLPButton = (props: HTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button {...props}>
			<Container size="8px">
				<div>Pay with</div>
				<IconContainer>
					<RLPIcon />
				</IconContainer>
			</Container>
		</Button>
	)
}

export default RLPButton
