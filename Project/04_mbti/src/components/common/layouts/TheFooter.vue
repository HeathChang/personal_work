<template>
  <header class="footer">
    <div class="inner">
      <div class="left">
        <button class="btn-back"> 아래좌측</button>
      </div>
      <div class="mid">
        아래 중앙
      </div>
      <div class="right">
        <button class="btn-nav">아래 우측</button>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, getCurrentInstance, reactive, toRef, toRefs } from "vue";
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

const methodState = () => {
  return {}
}

export default {
  name : 'the-footer',
  setup() {
    const page = reactive({
      'test' : 1
    })

    return {
      ...toRefs(page),
      ...layoutState(),
      ...methodState()
    }
  }


}
</script>