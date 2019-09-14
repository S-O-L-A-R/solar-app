import React, { ReactNode } from 'react'
import { TABLE_NUMBER } from 'mock'
import TableNo from 'components/TableNo'

interface Props {
	children: ReactNode
}

export default function TableWrapper({ children }: Props) {
	return (
		<div>
			<TableNo tableName={TABLE_NUMBER} />
			{children}
		</div>
	)
}
