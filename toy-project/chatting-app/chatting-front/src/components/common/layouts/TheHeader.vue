<template>
  <header class="header">
    <div class="inner">
      <div class="left" v-if="routeLayout.isBack">
        <button class="h-btn back" @click="fnBack">뒤로가기</button>
      </div>
      <div class="text">여기는 HEADER 의 영역입니다....</div>
    </div>
    <p>=======Header 영역 종료 =======</p>
  </header>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

const layoutState = () => {
  const { getters } = useStore()
  const routeLayout = computed(() => {
    return getters['layout/getRouteLayout']
  })
  return {
    routeLayout
  }
}

export default {
  name: 'the-header',
  setup() {
    const { proxy } = getCurrentInstance()
    const fnBack = () => {
      proxy.$router.go(-1)
    }
    return {
      ...layoutState(),
      fnBack
    }
  }
}
</script>

<style scoped></style>
