import styled from 'styled-components'
import { gray } from 'solarxui'

export const Title = styled.div`
	margin-bottom: 8px;
	font-size: 16px;
`

export const Desc = styled.div`
	font-size: 12px;
	color: ${gray[2]};
`

export const Head = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 8px;
	> * {
		padding-right: 8px;
	}
`
export const Price = styled.div`
	height: 100%;
	font-size: 18px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
`
