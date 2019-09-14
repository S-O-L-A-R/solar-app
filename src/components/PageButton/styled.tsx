import { Button } from 'solarxui'
import styled from 'styled-components'

export const ShadowButton = styled(Button).attrs({ height: 48 })`
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Container = styled.div`
	bottom: 34px;
	left: 20px;
	right: 20px;
	position: sticky;
`
