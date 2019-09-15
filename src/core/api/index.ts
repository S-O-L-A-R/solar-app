import ApiClient from './apiClient'

const client = new ApiClient({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://boba-pailaena.dev',
})

export default function getClient() {
	return client
}
