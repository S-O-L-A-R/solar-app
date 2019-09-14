import React, { useEffect } from 'react'
import { useObserver, useAsObservableSource } from 'mobx-react'
import mliffx from 'mliffx'

export default () => {
	const userProfile = useAsObservableSource(mliffx.userProfile)
	const accessToken = useAsObservableSource(mliffx.accessToken)
	const isInit = useAsObservableSource(mliffx.isInit)
	const error = useAsObservableSource(mliffx.error)
	useEffect(() => {
		mliffx.getProfile()
		mliffx.getAccessToken()
	}, [isInit])
	return useObserver(() => (
		<div>
			<h1>LIFFFF</h1>
			<h1>{userProfile.value.data && userProfile.value.data.userId}</h1>
			<h1>{userProfile.value.data && userProfile.value.data.displayName}</h1>
			<h1>{accessToken.value.data && accessToken.value.data}</h1>
			{error && <span>{error.message}/</span>}
		</div>
	))
}
