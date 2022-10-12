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

  //  Pokemon API: with no pokemon
  fetchPokemon(pageInfo= {}){
    return this.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageInfo.offset}&limit=${pageInfo.limit}`).then(
        response => {
          return response.data
        }
    )
  }
  //  Pokemon API: By URL
  fetchPokemonByURL(url){
    return this.get(url).then(
        response => {
          return response.data
        }
    )
  }

//  Pokemon API: (with ID)
  fetchPokemonByID(pokemon=''){
    return this.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
        response => {
          return response.data
        }
    )
  }

}

export default new CommonSvc()
