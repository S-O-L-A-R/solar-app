import { useState, useEffect } from 'react'
import { Profile } from '@line/bot-sdk'

export default function() {
	const [user, setUser] = useState<Profile>({
		userId: '',
		pictureUrl: '',
		displayName: '',
		statusMessage: '',
	})
	useEffect(() => {
		if (liff.getProfile) liff.getProfile().then(user => setUser(user))
	}, [])
	return user
}
