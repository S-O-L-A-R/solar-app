import ApiClient from './apiClient'

const client = new ApiClient()

export default function getClient() {
	return client
}
