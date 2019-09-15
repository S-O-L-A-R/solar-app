import { useState, useEffect } from 'react'
import { Profile } from '@line/bot-sdk'

export default function() {
	const [user, setUser] = useState<Profile>({
		userId: 'U1632ccabdad8353298e60f4fdc9380e4',
		pictureUrl:
			'https://profile.line-scdn.net/0hJym161ylFVZQSD5bQKFqAWwNGzsnZhMeKC8OZSBAGDV0egFTbnoON3YcSGEpeAIDb31dY3wdT25_',
		displayName: 'O1T_DEV - 怜雪 - R5I',
		statusMessage: '',
	})
	useEffect(() => {
		if (liff.getProfile) liff.getProfile().then(user => setUser(user))
	}, [])
	return user
}
