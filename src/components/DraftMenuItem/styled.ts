import styled from 'styled-components'

export const StyledDraftMenuItemContainer = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: repeat(2, 1fr);
`

export const StyledMemo = styled.div`
	grid-area: 1/1/2/2;
`

export const StyledAmount = styled.div`
	grid-area: 1/2/2/3;
`
