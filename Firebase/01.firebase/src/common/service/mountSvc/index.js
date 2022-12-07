import Service from '@/common/service/common/Service'

/**
 * 공통 API Service
 * @class mountSvc
 */

const FIREBASE_DOMAIN = 'https://memoapp-47a43-default-rtdb.asia-southeast1.firebasedatabase.app'


class mountSvc extends Service{
// class mountSvc extends ServiceExec {
    
    /**
     * 파일 업로드
     */
    fetchData(params = {}) {
        console.log('FetchData::: ')
        // return this.get(`${FIREBASE_DOMAIN}/memo.json`, params).then(response => {
        //     if ( response.status !== 200 ) {
        //         throw new Error('Could not fetch Memo')
        //     }
        //     return {
        //         status: response.status,
        //         data: response.data
        //     }
        // })
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

export default new mountSvc()
