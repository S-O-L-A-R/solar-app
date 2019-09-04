import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const headers = {
	auth: 'Authorization',
}

export default class ApiClient {
	client: AxiosInstance
	token: string | null = null

	constructor(options?: AxiosRequestConfig) {
		this.client = axios.create(options)
	}

	setToken(token: string) {
		this.token = token
		this.client.defaults.headers.common[headers.auth] = `Token ${token}`
	}

	clearToken() {
		delete this.token
		delete this.client.defaults.headers.common[headers.auth]
	}
}
