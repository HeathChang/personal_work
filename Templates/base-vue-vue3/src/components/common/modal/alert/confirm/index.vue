<template>
  <div class="body-inner">
    <div class="modal-dim on">
      <!--'on 추가'-->
      <div class="modal-wrap">
        <div class="modal-inner center">
          <div class="modal">
            <div class="modal-con">
              <div class="modal-txt">
                <div class="txt-ttl">{{ layout.title }}</div>
                <div class="txt-con">
                  <p v-html="layout.contents"></p>
                </div>
              </div>
            </div>
            <div class="modal-btn">
              <div class="btn-wrap">
                <button class="btn bo" v-on:click="fnCallBackCancel">
                  {{ cancelText }}
                </button>
                <button class="btn" v-on:click="fnCallBackDone">
                  {{ doneText }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'modal-alert-confirm',
  props: {
    layout: {
      type: [Object],
      default: () => {}
    },
    data: {
      type: [Object],
      default: () => {}
    },
    doneText: {
      type: [String],
      default: 'CONFIRM'
    },
    cancelText: {
      type: [String],
      default: 'CANCEL'
    },
    callBackDone: {
      type: [Function],
      default: () => {}
    },
    callBackCancel: {
      type: [Function],
      default: () => {}
    }
  },
  emits: ['close'],
  setup(props) {
    const { proxy } = getCurrentInstance()
    const fnCallBackCancel = event => {
      props.callBackCancel(proxy, event)
    }
    const fnCallBackDone = event => {
      props.callBackDone(proxy, event)
    }
    return { fnCallBackCancel, fnCallBackDone }
  }
}
</script>

<style scoped></style>
