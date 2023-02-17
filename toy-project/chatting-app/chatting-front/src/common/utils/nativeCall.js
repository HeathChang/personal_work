import Util from '@/common/utils/Util'
import store from '@/store'
import router from '@/router'
import ConstCode from '@/common/constants/ConstCode'

/**
 * 앱 종료
 * @return ''
 * @class Util
 */
export const nativeFinish = () => {
  location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=finish`
}

/**
 * 외부링크 URL 호출시
 * @return ''
 * @class Util
 */
export const nativeLink = link => {
  location.href = `native://action.${
    ConstCode.CODE_ENV_LIST.APP_SCHEMA
  }?cmd=browse&url=${encodeURIComponent(link)}`
}

/**
 * 디바이스 정보 가져오기
 * @param deviceType
 * @param deviceId
 * @param pushToken
 * @param appVersion
 * @param os
 * @returns {Promise<void>}
 */
window.nativeSetDeviceInfo = async (
  deviceType,
  deviceId,
  pushToken,
  appVersion,
  os
) => {
  let deviceInfo = {}
  deviceInfo['deviceType'] = deviceType
  deviceInfo['deviceId'] = deviceId
  deviceInfo['pushToken'] = pushToken
  deviceInfo['appVersion'] = appVersion
  deviceInfo['os'] = os
  localStorage.deviceInfo = JSON.stringify(deviceInfo)

  Util.nativeFirstRun('nativeFirstInfo')
}

/** 처음실행시 접근권한 페이지로 띄움 **/
window.nativeFirstInfo = async val => {
  // 최초 실행시 0, 그 이후 1
  console.log(val)
}

/** 푸시로 인한 router 이동 **/
window.fnRouterPush = async callbackParams => {
  await store.dispatch('user/updatePushFullPath', {
    pushFullPath: callbackParams
  })
}

window.fnBack = async () => {
  // 결제 화면에서 뒤로가기 할때 (안드로이드)
  // 0. modalAlert이 있는지
  // 1. modal이 있는지
  // 2. side-bar 열려 있는지
  // 3. 종료해야할 페이지인지
  // 4. router.go(-1)
  const modalAlerts = store.getters['layout/getModalAlertComponents']
  const modals = store.getters['layout/getModalComponents']
  const isShowSideBar = store.getters['layout/getIsShowSideBar']
  if (!Util.isEmpty(modalAlerts)) {
    await store.dispatch('layout/closeModalAlertComponent', {
      index: modalAlerts.length - 1
    })
    return
  }
  if (!Util.isEmpty(modals)) {
    await store.dispatch('layout/closeModalComponent', {
      index: modals.length - 1
    })
    return
  }
  if (isShowSideBar) {
    await store.dispatch('layout/updateIsShowSideBar', {
      isShowSideBar: false
    })
    return
  }
  if (
    !Util.isEmpty(window.routeQuery.isRoot) &&
    Number(window.routeQuery.isRoot) > 0
  ) {
    nativeFinish()
    return
  }
  router.go(-1)
}

window.setEncryptValue = async (value, value2) => {
  // juminCount 먼저
  if (!Util.isEmpty(value2)) {
    await store.dispatch('car/updateJuminCount', {
      juminCount: Number(value2)
    })
  }
  await store.dispatch('car/updateCarInsureDTOEncryptedJumin', {
    encryptedJumin: value
  })
}

let callbackScreenOnFunction
window.callbackScreenOn = () => {
  if (callbackScreenOnFunction) {
    callbackScreenOnFunction()
  }
}

let callbackScreenOffFunction
window.callbackScreenOff = () => {
  if (callbackScreenOffFunction) {
    callbackScreenOffFunction()
  }
}

export const connectedSocket = (screenOnFunction, screenOffFunction) => {
  callbackScreenOnFunction = screenOnFunction
  callbackScreenOffFunction = screenOffFunction
}

export const closeSocket = () => {
  callbackScreenOnFunction = undefined
  callbackScreenOffFunction = undefined
}
