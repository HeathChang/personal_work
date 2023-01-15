import ServiceExec from '@/common/utils/ServiceExec'

/**
 * 공통 API Service
 * @class MemoSvc
 */

const FIREBASE_DOMAIN = 'https://memoapp-47a43-default-rtdb.asia-southeast1.firebasedatabase.app'
// const FIREBASE_DOMAIN = 'https://foonea-21ee6-default-rtdb.firebaseio.com'


// class MemoSvc extends ServiceExec {
class MemoSvc extends ServiceExec {

    /**
     * 파일 업로드
     */
    fetchData(params = {}) {
        return this.get(`${FIREBASE_DOMAIN}/memo.json`, params).then(response => {
            if ( response.status !== 200 ) {
                throw new Error('Could not fetch Memo')
            }
            return {
                status: response.status,
                data: response.data
            }
        })
    }

    postData(params = {} ) {
        return this.post(`${FIREBASE_DOMAIN}/memo.json`, params).then(response => {
            if ( response.status !== 200 ) {
                throw new Error('Could not fetch Memo')
            }
            return {
                status: response.status,
                data: response.data
            }
        })
    }


}

export default new MemoSvc()
