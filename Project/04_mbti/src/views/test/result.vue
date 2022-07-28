<template>
  <div class="inner-container">
    <div class="con-title">당신의 MBTI는..
      <div style="text-align: right"> [ {{ form.mbti || `ENFP` }} ]</div>
    </div>
    <div class="con-body">
      <div class="con-body-title">
        <h2 style="text-align: center">
          {{ form.mbtiSentence || `열성적인 중재자` }}
        </h2>
      </div>
      <div class="con-body-contents">
        <div class="personality">
          성격: {{ form.personality }}
        </div>
        <div class="adv">
          장점: {{ form.adv }}
        </div>
        <div class="dis">
          단점: {{ form.dis }}
        </div>
        <div class="job">
          추천 직업: {{ form.job }}
        </div>
      </div>
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