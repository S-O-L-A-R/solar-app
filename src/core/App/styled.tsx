import styled, { createGlobalStyle } from 'styled-components'

export const PageContainer = styled.div`
	@media (orientation: portrait) {
		padding: 0 8px;
		padding-top: 24px;
		padding-bottom: 34px;
	}
	@media (orientation: landscape) {
		padding: 8px 44px;
		padding-bottom: 21px;
	}
`

export const Container = styled.div`
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	> * > svg {
		@keyframes spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
		animation-name: spin;
		animation-duration: 5000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
`

export const GlobalStylesheet = createGlobalStyle`
	body {
		padding-right: 0 !important;
	}
`
