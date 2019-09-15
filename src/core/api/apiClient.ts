import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { MenuItemV2 } from 'types/Menu'

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

	async addDraftMenuItem(menu: MenuItemV2) {
		this.client.post('/rms-ms/v1/menuitem', menu)
	}

	async deleteMenuItem(menu: MenuItemV2) {
		this.client.delete('/rms-ms/v1/menuitem', {
			data: menu,
		})
	}

	async getSummary<T>(userId: string) {
		return this.client
			.post<T>('rms-ms/v1/summary', {
				userId,
				tableId: '1241',
			})
			.then(data => data.data)
	}

	async pay({ tableId, userId }: { tableId: string; userId: string }) {
		return this.client
			.post<{
				returnCode: string
				returnMessage: string
				info: {
					paymentUrl: {
						web: string
						app: string
					}
					transactionId: string
					paymentAccessToken: string
				}
			}>('/rms-ms/v1/summary/pay', { tableId, userId })
			.then(data => data.data)
	}
}
