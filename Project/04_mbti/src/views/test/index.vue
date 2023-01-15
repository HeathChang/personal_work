<template>
  <div class="main">
    <div class="main_inner">
      <div class="page" v-if="boolFinal !== true">
        <component-intro v-if="step === '0'" @done="fnNext"/>
        <test-step1 v-else-if="step === '1'" @done="fnNext" :step="step"/>
        <test-step2 v-else-if="step === '2'" @done="fnNext" :step="step"/>
        <test-step3 v-else-if="step === '3'" @done="fnNext" :step="step"/>
        <test-step4 v-else @close="fnCheckResult" :step="step"/>
      </div>
      <div class="page" v-else>
        <test-result v-else :data="mbtiResult"/>
      </div>

    </div>
  </div>
</template>

<script>
import ComponentIntro from './step1'
import TestStep1 from './step2'
import TestStep2 from './step2'
import TestStep3 from './step2'
import TestStep4 from './step2'
import TestResult from './result'
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";

export default {
  name : "test-index",
  components : { ComponentIntro, TestStep1, TestStep2, TestStep3, TestStep4, TestResult },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      step : sessionStorage.getItem('step') || '1',
      mbtiResult : [],
      boolFinal : false
    })

    const fnNext = (index) => {
      console.log('fnNext:: ', index)
      state.step = toString(index)
      proxy.$router.go()
    }

    const fnCheckResult = params => {
      state.mbtiResult = params
      state.boolFinal = true
      console.log(state.boolFinal)
    }

    onMounted(() => {
      if ( state.step !== ( sessionStorage.getItem('step') || '1' ) && state.step !== 'done' ) {
        alert('이전진행단계부터 진행합니다..')
      }
      state.step = ( sessionStorage.getItem('step') || '1' )
    })

    return {
      ...toRefs(state),
      fnNext,
      fnCheckResult
    }
  }
}
</script>

<style scoped>

</style>