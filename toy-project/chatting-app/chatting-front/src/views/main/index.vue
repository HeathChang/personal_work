<template>
  <main class="main" role="main">
    <div class="main-inner bg">
      <div class="main-con">
        <div class="sec">
          <div class="con color sec-color gray" v-on:click="fnView">
            View
          </div>
          <div class="con" v-on:click="fnModal">Modal</div>
          <div class="con" v-on:click="fnForm">Form</div>
          <div class="con">content</div>
          <div class="con">content</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'

export default {
  name: 'main-index',
  description: '메인 인덱스',
  setup() {
    const { proxy } = getCurrentInstance()
    const router = useRouter()
    const fnView = () => {
      router.push({ path: '/main/view' })
    }

    const fnModal = () => {
      const payload = {}
      payload.component = proxy.$modalAlertNames.BASE
      payload.layout = {
        title: 'Hello World',
        contents: 'Hello'
      }
      payload.callBack = proxy => {
        proxy.$emit('close')
      }
      proxy.$store.dispatch('layout/pushModalComponent', payload)
    }

    const fnForm = () => {
      router.push({ path: '/main/form' })
    }
    return { fnView, fnModal, fnForm }
  }
}
</script>
<style scoped></style>
