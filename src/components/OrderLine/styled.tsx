import styled from 'styled-components'
import { gray } from 'solarxui'
import IHateYouContainer from 'components/IHateYouContainer'

export const Time = styled.div`
	color: ${gray[2]};
	font-size: 14px;
`

export const Detail = styled.div`
	font-size: 18px;
`

export const Desc = styled.div`
	font-size: 14px;
`

export const Sep = styled(IHateYouContainer)`
	align-items: center;
`

export const Wrapper = styled.div`
	&:not(:last-child) {
		padding-bottom: 16px;
		border-bottom: 1px solid ${gray[1]};
	}
	&:not(:first-child) {
		padding-top: 16px;
	}
`
