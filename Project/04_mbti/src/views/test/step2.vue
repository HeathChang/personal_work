<template>
  <div class="inner-container">
    <div class="inner-main-question" v-for="(item,index) in dummy" :key="index">
      <div class="inner-main-title">
        {{ index }}. {{ item.q }} {{ item.id }}
      </div>
      <ul class="main-select" id="step2-select-ul">
        <li id="step2-select-li" v-for="(res,idx) in item.r" :key="idx">
          <input
              type="radio"
              :name="item.id"
              :id="item.id"
              @click="fnAdd(item.id, idx)"
              :checked="resultSet[item.id] === idx"
          />
          <label for="item.id" class="select-text">
            <p>{{ res }}</p>
          </label>
        </li>
      </ul>
    </div>
    <p v-if="valid.resultSet.$error">
      {{ msg.resultSet }}
    </p>
    <div class="confirm">
      <button @click.prevent.stop="fnConfirm(step)">Next</button>
    </div>
  </div>
</template>


<script>
import data from '@/dummy/data'
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import useVuelidate from "@vuelidate/core";

export default {
  name : 'test-step2',
  props : {
    step : String || Number
  },
  setup(props) {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      dummy : data.step1,
      // dummy : `data.step${ props.step }`
      resultSet : {},
      msg : {
        resultSet : ''
      }
    })

    const fnAdd = (id, value) => {
      if ( state.resultSet.hasOwnProperty(id) ) {
        // 이미 값 있을 경우 -> 해제
        if ( state.resultSet[id] !== value ) {
          // 이미 들어있는 값이 (결과값) 새로 들어오는 값과 다르면, 새로 들어오는 값으로 덮기
          state.resultSet = { ...state.resultSet, [id] : value }
        } else {
          // 이미 들어있는 값이 (결과값) 새로 들어오는 값과 같으면,초기화
          state.resultSet = Object.keys(state.resultSet).filter(i => i != id).reduce((a, v) => ( { ...a, [v] : value } ), {})
        }
      } else {
        // 값이 없을 경우 -> 추가
        state.resultSet = { ...state.resultSet, [id] : value }
      }
      console.log(123, state.resultSet)
    }

    // Section::: Validations
    const rules = {
      resultSet : {
        test : function (val) {
          if ( Object.keys(state.resultSet).length < 20 ) {
            state.msg.resultSet = '전부다 체크해주세용'
            return false
          }
          return true
        }
      }
    }
    const valid = useVuelidate(rules, state.resultSet)

    onMounted(() => {
      fnMounted(props.step)
    })

    const fnMounted = async index => {
      const payload = {}
      payload.index = parseInt(index)
      const res = await proxy.$TestSvc.getTest(payload)
      if ( res.statusText !== 'OK' ) {
        throw new Error('Sth Occured, Check next Time')
      } else {

      }
    }

    const fnConfirm = async (index) => {
      // valid.value.$touch()
      // if ( valid.value.$invalid ) return

      console.log('다음페이지로 진입')
      // AXIOS해서 스텝별로 한개씩 DB로 전송
      const payload = {}
      payload.resultSet = { ...state.resultSet }
      payload.index = props.step

      const res = await proxy.$TestSvc.sendTest(payload)
      console.log(112, res)

      return false
      // AXIOS 통신 이후에  다음 페이지로 이동
      // sessionStorage.setItem('step', props.step)
      // setTimeout(() => {
      //   proxy.$emit('done')
      // }, 250)
    }
    return {
      ...toRefs(state),
      fnConfirm,
      fnMounted,
      fnAdd,
      valid

    }
  }
}
</script>

<style>

</style>