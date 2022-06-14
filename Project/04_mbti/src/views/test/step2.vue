<template>
  <div class="inner-container">
    <div class="inner-main-question" v-for="(item,index) in dummy" :key="index">
      <div class="inner-main-title">
        {{ index }}. {{ item.q }}
      </div>
      <ul class="main-select">
        <li v-for="(item2,index2) in item.r" :key="index2">
          <input
              type="radio"
              name="`${item2.id}_${index2}`"
              id="`${item2.id}_${index2}`"
          />
          <label for="`${item2.id}_${index2}`" class="select-text">
            <p>{{ item2 }}</p>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import data from '@/dummy/data'
import { reactive, toRefs } from "vue";

export default {
  name : 'test-step2',
  setup() {

    const state = reactive({
      dummy : data.step1
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>