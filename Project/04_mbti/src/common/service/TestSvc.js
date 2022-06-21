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
		return this.get('/api/test/postTest', params).then(response => {
			return response.data
		})
	}
}

export default new CommonSvc()
