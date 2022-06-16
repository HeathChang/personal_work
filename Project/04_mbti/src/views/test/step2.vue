<template>
  <div class="inner-container">
    <div class="inner-main-question" v-for="(item,index) in dummy" :key="index">
      <div class="inner-main-title">
        {{ index }}. {{ item.q }}
      </div>
      <ul class="main-select" id="step2-select-ul">
        <li id="step2-select-li" v-for="(item2,index2) in item.r" :key="index2">
          <input
              type="radio"
              name="`${item2.id}_${index2}`"
              id="`${item2.id}_${index2}`"
              @click="fnAdd(item.q,item2)"
          />
          <label for="`${item2.id}_${index2}`" class="select-text">
            <p>{{ item2 }}</p>
          </label>
        </li>
      </ul>
    </div>
    <div class="confirm">
      <button @click.prevent.stop="fnConfirm(step)">Next :: {{ step - 1 }}</button>
    </div>
  </div>
</template>


<script>
import data from '@/dummy/data'
import { getCurrentInstance, reactive, toRefs } from "vue";

export default {
  name : 'test-step2',
  props : {
    step : String || Number
  },
  setup(props) {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      dummy : data.step1
      // dummy : `data.step${ props.step }`

    })

    const fnAdd = (index, value) => {
      console.log(index, value)
    }
    const fnConfirm = (index) => {
      // sessionStorage.setItem('step', props.step)


      return false
      setTimeout(() => {
        proxy.$emit('done')
      }, 250)
    }
    return {
      ...toRefs(state),
      fnConfirm,
      fnAdd
    }
  }
}
</script>

<style>

</style>