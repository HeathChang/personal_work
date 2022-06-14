<template>
  <div class="main">
    <div class="main_inner">
      <div class="page">
        <test-step1 v-if="step === '1'" @done="fnNext('2')"/>
        <test-step2 v-if="step === '2'" @done="fnNext('3')"/>
      </div>
    </div>
  </div>
</template>

<script>
import TestStep1 from './step1'
import TestStep2 from './step2'
import { onMounted, reactive, toRefs } from "vue";

export default {
  name : "test-index",
  components : { TestStep1, TestStep2 },
  setup() {
    const state = reactive({
      step : '1',
    })

    const fnNext = (index) => {
      state.step = index
    }

    onMounted(() => {
      if(state.step !== (sessionStorage.getItem('step')||'1')){
        alert('이전진행단계부터 진행합니다..')
      }
      state.step = (sessionStorage.getItem('step') ||'1')
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