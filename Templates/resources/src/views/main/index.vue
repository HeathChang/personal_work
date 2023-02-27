<template>
  <main class="main" role="main">
    <div class="main-inner bg">
      <div class="main-con">
        <div class="sec">
          <section>
            <router-link to="/dropdown1">dropdown_triangle_change</router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
          </section>
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
        title: 'Appg💓',
        contents: 'Hello-✋'
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
