import Env from '@/common/constants/Env.json'
import EnvStage from '@/common/constants/Env_stage.json'
import EnvProd from '@/common/constants/Env_prod.json'

let CODE_ENV_LIST = Env

if (process.env.NODE_ENV === 'production') {
  CODE_ENV_LIST = EnvProd
} else if (process.env.VUE_APP_MODE === 'stage') {
  CODE_ENV_LIST = EnvStage
}

const ConstCode = function() {
  return {
    CODE_ENV_LIST,
    getFilePath: function(path = '') {
      return `${this.CODE_ENV_LIST.FILE_SERVER_URL}${path}`
    }
  }
}

export default ConstCode()
