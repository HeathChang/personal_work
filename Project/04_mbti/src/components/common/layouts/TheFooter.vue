<template>
  <footer class="footer" >
    <div class="inner">
      <div class="bot-left">
      </div>
      <div class="bot-center">
        {{  routeLayout }} 123123
        <div class="title-footer-title" @click="fnShowMore"></div>
      </div>
      <div class="bot-right">
      </div>
    </div>
  </footer>
</template>

<script>
import { computed, getCurrentInstance, reactive, toRefs } from "vue";
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

    const fnShowMore = () => {
      console.log('하단 부분 더보기')
    }
    return {
      ...toRefs(page),
      ...layoutState(),
      ...methodState(),
      fnShowMore
    }
  }


}
</script>