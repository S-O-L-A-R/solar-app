import styled from 'styled-components'
import IHateYouContainer from 'components/IHateYouContainer'

export const Container = styled(IHateYouContainer)`
	flex: 1;
	> button {
		align-self: flex-end;
	}
`

export const UsersContainer = styled.div`
	padding-right: 8px;
	display: flex;
	flex-wrap: nowrap;
	flex: 1;
	> * {
		flex: 1;
		line-height: 18px;
	}
`

export const Number = styled.div`
	font-size: 12px;
`
