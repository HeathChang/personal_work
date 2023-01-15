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
                <button class="btn" v-on:click="fnCallBack">
                  {{ callBackText }}
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
  name: 'modal-alert-base',
  props: {
    index: {
      type: [Number],
      default: 0
    },
    layout: {
      type: [Object],
      default: () => {}
    },
    data: {
      type: [Object],
      default: () => {}
    },
    callBackText: {
      type: [String],
      default: 'OK'
    },
    callBack: {
      type: [Function],
      default: () => {}
    }
  },
  emits: ['close'],
  setup(props) {
    const { proxy } = getCurrentInstance()
    const fnCallBack = event => {
      props.callBack(proxy, event)
    }
    return { fnCallBack }
  }
}
</script>

<style scoped></style>
