import styled from 'styled-components'

export const StyledContainer = styled.div`
	height: calc(75vh - 246px);
	padding: 18px;
	overflow-y: scroll;
`

export const StyledOrderDetail = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: 42px 1fr;
	height: auto;
	margin-bottom: 10px;
`

export const StyledMenuName = styled.span`
	grid-area: 1/1/2/2;

	color: #000000;
	font-size: 24px;
`

export const StyledSubtitle = styled.span`
	font-size: 16px;
	color: #989898;
	justify-self: start;
	word-break: break-word;
`

export const StyledItemPrice = styled.span`
	grid-area: 1/2/3/2;
	font-size: 28px;
	justify-self: end;

	&:before {
		content: '฿';
	}
`

export const StyledNumberPickerContainer = styled.div`
	grid-area: 2/2/3/2;
	align-self: end;
	justify-self: end;
`
