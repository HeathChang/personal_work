import ServiceExec from '@/common/utils/ServiceExec'

/**
 * 공통 API Service
 * @class CommonSvc
 */

class CommonSvc extends ServiceExec {

  /**
   * 파일 업로드
   * @param file {string} 파일
   */
  fileUpload(params = {}) {
    return this.multiPost('/api/pqas/mct/uploadSignImage', params).then(
      response => {
        return response.data
      }
    )
  }

//  Pokemon API: (with ID)
  fetchPokemon(pokemon=''){
    return this.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
        response => {
          return response.data
        }
    )
  }

}

export default new CommonSvc()
