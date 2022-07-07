import ServiceExec from '@/common/utils/ServiceExec'

/**
 * 공통 API Service
 * @class TestSvc
 */

class CommonSvc extends ServiceExec {

	/**
	 * 검사 결과 보내기
	 */
	sendTest(params = {}) {

		return this.post('/api/test/save_test', params).then(response => {
			return response
		})
	}

	/**
	 * 검사 문제지 받기
	 */
	getTest(params = {}) {
		return this.patch('/api/test/getTest', params).then(response => {
			return response
		})
	}


}

export default new CommonSvc()
