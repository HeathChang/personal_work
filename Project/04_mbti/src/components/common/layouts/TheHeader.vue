<template>
  <header class="header" v-if="routeLayout.isHeader">
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
        <button class="btn-header-nav" :class="{on:tabHeaderRight === true}" @click="fnNavBtn"></button>
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
    const { proxy } = getCurrentInstance()
    const page = reactive({
      'test' : 1,
      tabHeaderRight : false
    })

    const fnBackBtn = () => {
      proxy.$router.go(-1)
    }

    const fnNavBtn = () => {
      page.tabHeaderRight = !page.tabHeaderRight
      console.log(fnNavBtn)
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