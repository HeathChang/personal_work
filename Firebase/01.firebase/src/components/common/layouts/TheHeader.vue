<template>
  <header class="header" v-if="routeLayout.isHeader">
    <div class="inner">
      <div class="left" v-if="routeLayout.isBack">
        <button class="h-btn back" @click="fnBack"></button>
      </div>
      <div class="text">Memo</div>
    </div>
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
