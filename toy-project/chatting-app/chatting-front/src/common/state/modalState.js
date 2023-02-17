import { modalAlertNames } from '@/components/common/globalComponent'
import { useStore } from 'vuex'

export const useModalState = () => {
  const store = useStore()

  const fnModalConfirm = async (title, contents, callBackDone) => {
    const payload = {}
    payload.component = modalAlertNames.CONFIRM
    payload.layout = {
      title: title,
      contents: contents
    }
    payload.callBackDone = proxy => {
      proxy.$emit('close')
      callBackDone()
    }
    payload.callBackCancel = proxy => {
      proxy.$emit('close')
    }
    await store.dispatch('layout/pushModalAlertComponent', payload)
  }

  const fnModalAlert = async (title, contents, callBack) => {
    if (callBack === undefined || typeof callBack !== 'function') {
      callBack = () => {
        store.dispatch('layout/closeModalAlertComponent', { index: 0 })
      }
    }
    const payload = {}
    payload.component = modalAlertNames.BASE
    payload.layout = {
      title: title,
      contents: contents
    }
    payload.callBack = callBack
    await store.dispatch('layout/pushModalAlertComponent', payload)
  }


  return {
    fnModalConfirm,
    fnModalAlert,
  }
}
