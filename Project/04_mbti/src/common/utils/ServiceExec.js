import axios from 'axios'
import store from '@/store'
import queryString from 'query-string'

class ServiceExec {
	constructor() {
		let ServiceExec = axios.create()
		ServiceExec.interceptors.request.use(this.handleRequest)
		ServiceExec.interceptors.response.use(this.handleSuccess, this.handleError)
		this.ServiceExec = ServiceExec
		this.store = store
	}

	async handleRequest(request) {
		// console.log('handleRequest, request::: {} ', request)
		await store.dispatch('layout/updateIsLoading', { isLoading: true })
		return request
	}

	async handleSuccess(response) {
		// console.log('handleSuccess:: response:::{}', response)
		await store.dispatch('layout/updateIsLoading', { isLoading: false })
		return response
	}

	async handleError(error) {
		// console.log('handleError ::: {}', error)
		await store.dispatch('layout/updateIsLoading', { isLoading: false })
		return Promise.reject(error)
	}

	get(path, params = {}) {
		return this.ServiceExec.get(path, { params })
	}

	patch(path, payload) {
		return this.ServiceExec.request({
			method: 'PATCH',
			url: path,
			responseType: 'json',
			data: payload
		})
	}

	post(path, payload) {
		return this.ServiceExec.request({
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload
		})
	}

	delete(path, payload) {
		payload = `${path}?${queryString.stringify(payload)}`
		return this.ServiceExec.delete(payload)
	}

	queryPost(path, payload) {
		payload = `${queryString.stringify(payload)}`
		return this.ServiceExec.request({
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload
		})
	}

	multiPost(path, payload) {
		return this.ServiceExec.request({
			headers: { 'Content-Type': 'multipart/form-data' },
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload
		})
	}
}

export default ServiceExec
