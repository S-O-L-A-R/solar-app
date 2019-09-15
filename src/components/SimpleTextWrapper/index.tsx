import React, { ReactNode } from 'react'
import { No } from './styled'

interface Props {
	children: ReactNode
	text: string
}

export default function TableWrapper({ children, text }: Props) {
	return (
		<div>
			<No>{text}</No>
			{children}
		</div>
	)
}
