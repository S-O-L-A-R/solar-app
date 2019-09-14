import React, { HTMLAttributes } from 'react'
import { Container, ShadowButton } from './styled'

const PageButton = (props: HTMLAttributes<HTMLButtonElement>) => (
	<Container>
		<ShadowButton {...props} />
	</Container>
)
export default PageButton
