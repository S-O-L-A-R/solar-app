import React from 'react'
import { No } from './styled'

interface Props {
	tableName: string
}

const TableNo = ({ tableName }: Props) => <No className="highlight">{tableName}</No>

export default TableNo
