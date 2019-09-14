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
			<h1>LIFFFF</h1>
			<h1>{store.userProfile && store.userProfile.value.data && store.userProfile.value.data.userId}</h1>
			<h1>{store.userProfile && store.userProfile.value.data && store.userProfile.value.data.displayName}</h1>
			<h1>{store.accessToken && store.accessToken.value.data && store.accessToken.value.data}</h1>
			{store.error && <span>{store.error.message}/</span>}
		</div>
	))
}
