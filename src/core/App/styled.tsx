import styled from 'styled-components'

export const PageContainer = styled.div`
	@media (orientation: portrait) {
		padding: 0 8px;
		padding-top: 44px;
		padding-bottom: 34px;
	}
	@media (orientation: landscape) {
		padding: 8px 44px;
		padding-bottom: 21px;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`
