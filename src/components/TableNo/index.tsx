import React, { HTMLAttributes } from 'react'
import { No } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	tableName: string
}

const TableNo = ({ tableName, ...props }: Props) => (
	<No className="highlight" {...props}>
		{`Table No.${tableName}`}
	</No>
)

export default TableNo
