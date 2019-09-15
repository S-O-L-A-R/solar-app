import styled from 'styled-components'

export const StyledDraftMenuItemContainer = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: repeat(2, 1fr);
`

export const StyledMemo = styled.div`
	grid-area: 1/1/2/2;
	padding-bottom: 8px;
`

export const StyledAmount = styled.div`
	grid-area: 1/2/2/3;
	justify-self: end;
`

export const StyledDiv = styled.div`
	grid-area: 2/1/3/2;
`

export const T = styled.div`
	font-size: 12px;
`
