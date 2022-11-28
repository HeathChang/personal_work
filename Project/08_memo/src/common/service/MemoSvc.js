import ServiceExec from '@/common/utils/ServiceExec'

/**
 * 공통 API Service
 * @class MemoSvc
 */

const FIREBASE_DOMAIN = 'https://memoapp-47a43-default-rtdb.asia-southeast1.firebasedatabase.app'


// class MemoSvc extends ServiceExec {
class MemoSvc{

    /**
     * 파일 업로드
     */
    fetchData(params = {}) {
        //api 주소
        fetch(`${FIREBASE_DOMAIN}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => console.log(res))

        // return this.multiPost(FIREBASE_DOMAIN, params).then(
        //     response => {
        //         return response.data
        //     }
        // )
    }

}

export default new MemoSvc()
