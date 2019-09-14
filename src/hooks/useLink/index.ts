import useReactRouter from 'use-react-router'
import { useCallback } from 'react'

export default function useLink(to: string) {
	const {
		location: { search },
		history,
	} = useReactRouter()
	const link = useCallback(() => {
		history.push(`${to}${search}`)
	}, [search, history, to])
	return link
}
