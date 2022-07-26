<template>
  <div class="inner-container">
    <div class="con-title">당신의 mbti는?</div>
    <div class="con-body">

      멋진 이름
      멋진 내부
      {{ form.mbti }}
      {{ form.comments }}
    </div>

  </div>
</template>


<script>
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from "vue";

export default {
  name : 'test-result',
  description : 'Test 결과 페이지',
  props : {
    data : {
      type : Array,
      default : () => {
      }
    }
  },
  setup(props) {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      form : {
        mbti : '',
        comments : ''
      },
    })
    const fnStartTest = () => {
      sessionStorage.setItem('step', '2')
      proxy.$emit('done')
    }


    onMounted(() => {
      console.log('props check:: ', props.data)
      state.form = { ...props.data }
    })
    return {
      ...toRefs(state),
      fnStartTest,
    }
  }
}
</script>

<style>
</style>