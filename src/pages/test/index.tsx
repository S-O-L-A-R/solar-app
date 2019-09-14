import React, { useEffect } from 'react'
import { useObserver, useLocalStore } from 'mobx-react'
import mliffx from 'mliffx'

export default () => {
	const store = useLocalStore(source => mliffx)
	useEffect(() => {
		if (store.isInit) {
			store.getProfile()
			store.getAccessToken()
		}
	}, [store])
	return useObserver(() => (
		<div>
			<h1>LIFFsdsadasFF</h1>
			<h5>{store.userProfile && store.userProfile.value}</h5>
			<h5>{store.accessToken && store.accessToken.value}</h5>
			{store.error && <span>{store.error.message}/</span>}
		</div>
	))
}
