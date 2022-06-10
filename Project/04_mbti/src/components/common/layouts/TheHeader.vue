<template>
  <header class="header">
    <div class="inner">
      <div class="top-left">
        <button class="btn-header-back" @click="fnBackBtn"></button>
      </div>
      <div class="top-center">
        <div class="title-header-title">
          MBTI 검사
        </div>
      </div>
      <div class="top-right">
        <button class="btn-header-nav" @click="fnNavBtn"></button>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, getCurrentInstance, reactive, toRef, toRefs } from "vue";
import { useStore } from 'vuex'
import { modalNames } from '../../globalComponent'

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
  name : 'the-header',
  setup() {
    const page = reactive({
      'test' : 1
    })

    const fnBackBtn = () => {
      console.log('뒤로가기 버튼')
    }

    const fnNavBtn = () => {
      console.log('더보기 버튼')
    }

    return {
      ...toRefs(page),
      ...layoutState(),
      ...methodState(),
      fnBackBtn,
      fnNavBtn
    }
  }


}
</script>

<style>

</style>