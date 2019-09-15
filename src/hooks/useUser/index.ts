import { useState, useEffect } from 'react'
import { Profile } from '@line/bot-sdk'

export default function() {
	const [user, setUser] = useState<Profile | null>(null)
	useEffect(() => {
		liff.getProfile().then(user => setUser(user))
	}, [])
	return user
}
