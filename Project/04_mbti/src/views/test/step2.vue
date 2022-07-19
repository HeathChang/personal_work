<template>
  <div class="inner-container">
    <div class="inner-main-question" v-for="(item,index) in data" :key="index">
      <div class="inner-main-title">
        {{ item.id }}. {{ item.question }}
      </div>
      <ul class="main-select" id="step2-select-ul">
        <li>
          <input
              type="radio"
              :name="item.id"
              :id="item.id"
              @click="fnAdd(item.id, '1')"

          />
          <label for="item.id" class="select-text">
            <p>{{ item.response1 }}</p>
          </label>
        </li>
        <li>
          <input
              type="radio"
              :name="item.id"
              :id="item.id"
              @click="fnAdd(item.id, '2')"
          />
          <label for="item.id" class="select-text">
            <p>{{ item.response2 }}</p>
          </label>
        </li>
      </ul>
    </div>
    <!--    <p v-if="valid.resultSet.$error">-->
    <!--      {{ msg.resultSet }}-->
    <!--    </p>-->
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
    step : String
  },
  setup(props) {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      dummy : data.step1,
      // dummy : `data.step${ props.step }`
      resultSet : {},
      data : {},
      msg : {
        resultSet : ''
      },
      mbtiLetter : {
        '0' : [ 'E', 'I' ],
        '1' : [ 'N', 'S' ],
      }

    })

    const fnAdd = (id, value) => {
      console.log('fnAdd: ', id, value)
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
    // const rules = {
    //   resultSet : {
    //     test : function (val) {
    //       if ( Object.keys(state.resultSet).length < 20 ) {
    //         state.msg.resultSet = '전부다 체크해주세용'
    //         return false
    //       }
    //       return true
    //     }
    //   }
    // }
    // const valid = useVuelidate(rules, state.resultSet)

    onMounted(() => {
      fnMounted(props.step)
    })

    const fnMounted = async index => {
      const payload = {}
      payload.index = index
      // payload.resultSet = {}
      const res = await proxy.$TestSvc.getTest(payload)
      console.log(res.data)
      if ( res.status === 200 ) {
        state.data = res.data
      }
      if ( res.statusText !== 'OK' ) {
        throw new Error('Sth Occured, Check next Time')
      }
    }

    const fnConfirm = index => {
      // valid.value.$touch()
      // if ( valid.value.$invalid ) return
      switch ( index ) {
        case '1':
        case '2':
        case '3':
          fnNext(index, state.resultSet)
          break
        case '4':
          fnSave(index, state.resultSet)
          break
      }
    }

    const fnNext = (index, result) => {
      const _letter = parseInt(index) - 1
      let _a = 0
      let _b = 0
      let _res = ''
      for ( let i in state.resultSet ) {
        console.log(i, typeof state.resultSet[i])
        if ( state.resultSet[i] === '1' ) {
          _a++
        } else {
          _b++
        }
      }

      if ( _a > _b ) {
        _res = state.mbtiLetter['0'][0]
      } else {
        if ( _a < _b ) {
          _res = state.mbtiLetter['0'][1]
        } else {
          _res = state.mbtiLetter['0'][1]
        }
      }
      console.log(121212, _res)


      return false
      if ( index !== '4' ) {
        sessionStorage.setItem('step', parseInt(index) + 1)
        sessionStorage.setItem(index, JSON.stringify(result))
        proxy.$emit('done', parseInt(index) + 1)
      }
    }

    const fnSave = async (index, result) => {
      console.log('final:: ', JSON.parse(sessionStorage.getItem('1')))
      // sessionStorage.setItem(index, JSON.stringify(result))
      let _obj = {}
      for ( let i = 1 ; i <= 4 ; i++ ) {
        _obj = { ..._obj, ...JSON.parse(sessionStorage.getItem(i)) }
      }
      // const res = await proxy.$
      console.log('arr check:: ', _obj)
      const payload = {}
      payload.resultSet = { ..._obj }
      const res = await proxy.$TestSvc.sendTest(payload)
      console.log('res check:: ', res)
      //체크 후, 한번에 백이랑 데이터 통신
    }

    return {
      ...toRefs(state),
      fnConfirm,
      fnMounted,
      fnAdd,
      // valid

    }
  }
}
</script>

<style>

</style>