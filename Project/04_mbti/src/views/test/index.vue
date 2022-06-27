<template>
  <div class="main">
    <div class="main_inner">
      <div class="page">
        <test-step1 v-if="step === '1'" @done="fnNext('2')"/>
        <test-step2 v-if="step === '2'" @done="fnNext('3')" :step="parseInt(step)"/>
        <test-step3 v-if="step === '3'" @done="fnNext('4')" :step="parseInt(step)"/>
        <test-step4 v-if="step === '4'" @done="fnNext('5')" :step="parseInt(step)"/>
        <test-step5 v-if="step === '5'" @done="fnNext('done')" :step="'done'"/>

        <div v-if="step === 'done'">끝입니다</div>
      </div>
    </div>
  </div>
</template>

<script>
import TestStep1 from './step1'
import TestStep2 from './step2'
import TestStep3 from './step2'
import TestStep4 from './step2'
import TestStep5 from './step2'
import { onMounted, reactive, toRefs } from "vue";

export default {
  name : "test-index",
  components : { TestStep1, TestStep2, TestStep3, TestStep4, TestStep5 },
  setup() {
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