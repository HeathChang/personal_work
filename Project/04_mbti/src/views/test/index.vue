<template>
  <div class="main">
    <div class="main_inner">
      <div class="page">
        <test-step1 v-if="step === '0'" @done="fnNext"/>
        <test-step2 v-else @done="fnNext" :step="step"/>

        <div v-if="step === 'done'">끝입니다</div>
      </div>
    </div>
  </div>
</template>

<script>
import TestStep1 from './step1'
import TestStep2 from './step2'

import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";

export default {
  name : "test-index",
  components : { TestStep1, TestStep2, },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      step : '1',
    })

    const fnNext = (index) => {
      state.step = index
    }

    onMounted(() => {
      if ( state.step !== ( sessionStorage.getItem('step') || '1' ) && state.step !== 'done' ) {
        alert('이전진행단계부터 진행합니다..')
      }
      state.step = ( sessionStorage.getItem('step') || '1' )
    })

    return {
      ...toRefs(state),
      fnNext
    }
  }
}
</script>

<style scoped>

</style>