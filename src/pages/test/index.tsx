import React from 'react'
import { useObserver } from 'mobx-react'
import mliffx from 'mliffx'

export default () => {
	return useObserver(() => (
		<div>
			<h1>{mliffx.userProfile.value.data && mliffx.userProfile.value.data.userId}</h1>
			<h1>{mliffx.userProfile.value.data && mliffx.userProfile.value.data.displayName}</h1>
			<h1>{mliffx.accessToken.value.data && mliffx.accessToken.value.data}</h1>
		</div>
	))
}
